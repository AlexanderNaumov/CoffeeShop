@file:JvmName("HttpAndroid")

package me.haymob.coffeeshopsdk.core

import kotlinx.coroutines.*
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.*
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.*
import okhttp3.*
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import okhttp3.internal.EMPTY_REQUEST
import java.io.*
import java.util.concurrent.TimeUnit

internal actual fun http(
    type: HTTPType,
    url: String,
    appId: String,
    masterKey: String,
    path: String,
    body: String?,
    isLoggingEnabled: Boolean
): Flow<String> {
    var _url = url
    if (_url.last() == '/' && _url.isNotEmpty()) _url = _url.dropLast(1)

    val requestBuilder = Request.Builder().apply {
        addHeader("Content-Type", "application/json")
        addHeader("X-Parse-Application-Id", appId)
        addHeader("X-Parse-Master-Key", masterKey)
    }
    val mediaType = "application/json; charset=utf-8".toMediaType()

    return callbackFlow {
        val request = when (type) {
            is GraphQL -> {
                if (isLoggingEnabled) println("request: ${type.gql.queryString()}")
                requestBuilder
                    .url("$_url/graphql/")
                    .post(type.gql.jsonString().toRequestBody(mediaType))
            }
            is Rest -> {
                if (isLoggingEnabled) println("request: $path")
                requestBuilder
                    .url("$_url/$path")
                    .apply {
                    val requestBody = body?.toRequestBody(mediaType) ?: EMPTY_REQUEST
                    when (type.method) {
                        HTTPMethod.Get -> Unit
                        HTTPMethod.Post -> post(requestBody)
                        HTTPMethod.Put -> put(requestBody)
                        HTTPMethod.Delete -> delete(requestBody)
                    }
                }
            }
        }.build()

        val client = OkHttpClient.Builder()
            .cookieJar(CookieJar.NO_COOKIES)
            .connectTimeout(30, TimeUnit.SECONDS)
            .build()

        val call = client.newCall(request)

        call.enqueue(object: Callback {
            override fun onFailure(call: Call, e: IOException) {
                close(e)
            }
            override fun onResponse(call: Call, response: Response) {
                val responseResult = kotlin.runCatching { response.body?.string() }
                val responseBody = responseResult.getOrNull() ?: throw responseResult.exceptionOrNull()!!
                if (response.code == 200) {
                    trySend(responseBody)
                    if (isLoggingEnabled) {
                        val printedResp = Json.decodeFromString<JsonObject>(responseBody).run {
                            Json { prettyPrint = true }.encodeToString(this)
                        }
                        println(printedResp)
                    }
                } else {
                    val json = Json.decodeFromString<JsonObject>(responseBody)
                    val error = (json["errors"]?.jsonArray?.map {
                        it.jsonObject["message"]?.toString() ?: ""
                    } ?: emptyList()).joinToString(separator = "\n\n")
                    close(InternalServerException(response.code, error))
                }
            }
        })

        awaitClose {
            call.cancel()
            cancel()
        }
    }
}