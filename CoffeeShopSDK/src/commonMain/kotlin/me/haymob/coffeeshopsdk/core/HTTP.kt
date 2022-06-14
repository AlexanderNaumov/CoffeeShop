package me.haymob.coffeeshopsdk.core

import me.haymob.coffeeshopsdk.config
import kotlinx.coroutines.flow.*

internal enum class HTTPMethod {
    Get, Post, Put, Delete
}

class InternalServerException(val code: Int, val mess: String): Exception("code: $code - $mess")

internal sealed interface HTTPType
internal class Rest(val method: HTTPMethod): HTTPType
internal class GraphQL(val gql: GQLResult): HTTPType

internal expect fun http(
    type: HTTPType,
    url: String,
    appId: String,
    masterKey: String,
    sessionToken: String?,
    path: String,
    body: String?,
    isLoggingEnabled: Boolean
): Flow<String>

internal fun http(gql: GQLResult) = http(GraphQL(gql), config.url, config.appId, config.masterKey, config.sessionToken, "", null, config.isLoggingEnabled)

internal fun http(method: HTTPMethod, path: String, body: String? = null) = http(Rest(method), config.url, config.appId, config.masterKey, null, path, body, config.isLoggingEnabled)