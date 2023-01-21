package me.haymob.coffeeshopsdk.core

import kotlinx.coroutines.flow.*

class InternalServerException(code: Int, mess: String): Exception("code: $code - $mess")

internal enum class HTTPMethod {
    Get, Post, Put, Delete
}

internal sealed interface HTTPType {
    class Rest(val method: HTTPMethod): HTTPType
    class GraphQL(val gql: GQLResult): HTTPType
}

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