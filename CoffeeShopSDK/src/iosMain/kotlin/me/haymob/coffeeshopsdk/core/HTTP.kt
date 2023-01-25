package me.haymob.coffeeshopsdk.core

import platform.Foundation.*
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.*

private val sessionConfig = NSURLSessionConfiguration.defaultSessionConfiguration.apply {
    setHTTPShouldSetCookies(false)
    val version = NSBundle.mainBundle.infoDictionary?.get("CFBundleShortVersionString") ?: "undefined"
    HTTPAdditionalHeaders = mapOf("User-Agent" to "NespressoApp (iOS/$version)")
}
internal actual fun http(
    type: HTTPType,
    url: String,
    appId: String,
    masterKey: String,
    sessionToken: String?,
    path: String,
    body: String?,
    isLoggingEnabled: Boolean
) = _http(type, url, appId, masterKey, sessionToken, path, body, isLoggingEnabled)

private fun _http(
    type: HTTPType,
    url: String,
    appId: String,
    masterKey: String,
    sessionToken: String?,
    path: String,
    body: String?,
    isLoggingEnabled: Boolean,
    numberOfConnection: Int = 1
): Flow<String> {
    var _url = url
    if (_url.last() == '/' && _url.isNotEmpty()) _url = _url.dropLast(1)

    fun URLRequest(url: String) = NSMutableURLRequest(
        NSURL(string = url),
        NSURLRequestReloadIgnoringLocalCacheData,
        30.0
    )

    val request = when (type) {
        is HTTPType.GraphQL -> {
            if (isLoggingEnabled) println("request: ${type.gql.queryString()}")
            URLRequest("$_url/graphql/").apply {
                HTTPMethod = "POST"
                HTTPBody = NSString.create(string = type.gql.jsonString()).dataUsingEncoding(NSUTF8StringEncoding)
            }
        }
        is HTTPType.Rest -> {
            if (isLoggingEnabled) println("request: $path")
            URLRequest("$_url/$path").apply {
                HTTPMethod = "${type.method}".uppercase()
                body?.let {
                    HTTPBody = NSString.create(string = it).dataUsingEncoding(NSUTF8StringEncoding)
                }
            }
        }
    }.apply {
        addValue("application/json", "Content-Type")
        addValue(appId, "X-Parse-Application-Id")
        addValue(masterKey, "X-Parse-Master-Key")
        if (sessionToken != null) {
            addValue(sessionToken, "X-Parse-Session-Token")
        }
    }

    return callbackFlow {
        val task = NSURLSession.sessionWithConfiguration(sessionConfig, null, delegateQueue = NSOperationQueue.currentQueue).dataTaskWithRequest(request) { data, response, error ->
            fun responseCode() = (response as NSHTTPURLResponse).statusCode.toInt()

            when {
                error != null -> {
                    if (listOf(53, -1003, -1005, -1009, -9805, -999).contains(error.code.toInt())) {
                        if (numberOfConnection < 5) {
                            launch {
                                _http(type, url, appId, masterKey, sessionToken, path, body, isLoggingEnabled,numberOfConnection + 1).collect(::trySend)
                            }
                        } else {
                            close(Exception("connection_failed"))
                        }
                    } else {
                        close(Exception(error.localizedDescription))
                    }
                }
                responseCode() != 200 -> {
                    val json = data?.let { NSJSONSerialization.JSONObjectWithData(it, 0, null) as? NSDictionary }
                    val errors = ((json?.valueForKey("errors") as? NSArray)?.let { arr ->
                        (0UL until arr.count).map(arr::objectAtIndex)
                    }?.mapNotNull {
                        (it as? NSDictionary)?.valueForKey("message") as? String
                    } ?: emptyList()).joinToString(separator = "\n\n")
                    close(InternalServerException(responseCode(), errors))
                }
                data == null || data.length.toInt() == 0 ->
                    close(Exception("incorrect_response"))
                else -> {
                    val resp = NSString.create(data = data, encoding = NSUTF8StringEncoding)?.toString() ?: ""
                    trySend(resp)
                    if (isLoggingEnabled) {
                        val printedResp = NSString.create(string = resp).dataUsingEncoding(
                            NSUTF8StringEncoding)?.run {
                            NSJSONSerialization.JSONObjectWithData(this, 0, null)?.run {
                                NSJSONSerialization.dataWithJSONObject(this, NSJSONWritingPrettyPrinted, null)?.run {
                                    NSString.create(this, NSUTF8StringEncoding).toString()
                                }
                            }
                        }
                        println("response: $printedResp")
                    }
                }
            }
        }

        task.resume()

        awaitClose {
            task.cancel()
            cancel()
        }
    }.take(1)
}