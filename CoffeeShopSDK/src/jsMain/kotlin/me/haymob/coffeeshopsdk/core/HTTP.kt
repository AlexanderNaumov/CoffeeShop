package me.haymob.coffeeshopsdk.core

import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.coroutines.cancel
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import org.w3c.fetch.OMIT
import org.w3c.fetch.RequestCredentials
import org.w3c.fetch.RequestInit

private data class Req(
    val method: String,
    val url: String,
    val body: String?
)

internal actual fun http(
    type: HTTPType,
    url: String,
    appId: String,
    masterKey: String,
    sessionToken: String?,
    path: String,
    body: String?,
    isLoggingEnabled: Boolean
): Flow<String> {
    var _url = url
    if (_url.last() == '/' && _url.isNotEmpty()) _url = _url.dropLast(1)

    return callbackFlow {
        val headers = js("{}")
        headers["Content-Type"] = "application/json"
        headers["X-Parse-Application-Id"] = appId
        headers["X-Parse-Master-Key"] = masterKey

        if (sessionToken != null) {
            headers["X-Parse-Session-Token"] = sessionToken
        }

        val req = when (type) {
            is GraphQL -> {
                if (isLoggingEnabled) println("request: ${type.gql.queryString()}")
                Req(
                    "POST",
                    "$_url/graphql/",
                    type.gql.jsonString()
                )
            }
            is Rest -> {
                if (isLoggingEnabled) println("request: $path")
                Req(
                    "${type.method}".uppercase(),
                    "$_url/$path",
                    body
                )
            }
        }

        var isCanceled = false

        window.fetch(
            req.url,
            RequestInit(
                headers = headers,
                method = req.method,
                body = req.body,
                credentials = RequestCredentials.OMIT
            )
        ).then { resp ->
            resp.text().then { Pair(it, resp.status.toInt()) }
        }.then {
            val (text, code) = it
            if (!isCanceled && code == 200) {
                trySend(text)
                if (isLoggingEnabled) {
                    val printedResp = Json.decodeFromString<JsonObject>(text).run {
                        Json { prettyPrint = true }.encodeToString(this)
                    }
                    println(printedResp)
                }
            } else if (!isCanceled) {
                val json = Json.decodeFromString<JsonObject>(text)
                val error = (json["errors"]?.jsonArray?.map {
                    it.jsonObject["message"]?.toString() ?: ""
                } ?: emptyList()).joinToString(separator = "\n\n")
                throw InternalServerException(code, error)
            }
        }.catch {
            if (!isCanceled) close(it)
        }

        awaitClose {
            isCanceled = true
            cancel()
        }
    }


}