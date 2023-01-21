package me.haymob.coffeeshopsdk.services

import me.haymob.coffeeshopsdk.core.GQLResult
import me.haymob.coffeeshopsdk.core.HTTPMethod
import me.haymob.coffeeshopsdk.core.HTTPType
import me.haymob.coffeeshopsdk.core.http

internal class HTTPService(
    private val config: ConfigService
) {
    fun rest(method: HTTPMethod, path: String, body: String? = null) = http(
        HTTPType.Rest(method),
        config.state.url,
        config.state.appId,
        config.state.masterKey,
        null,
        path,
        body,
        config.state.isLoggingEnabled
    )
    fun graphQL(gql: GQLResult) = http(
        HTTPType.GraphQL(gql),
        config.state.url,
        config.state.appId,
        config.state.masterKey,
        config.state.sessionToken,
        "",
        null,
        config.state.isLoggingEnabled
    )
}