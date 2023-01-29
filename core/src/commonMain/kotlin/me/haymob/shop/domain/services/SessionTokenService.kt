package me.haymob.shop.domain.services

import me.haymob.shopsdk.ShopSDK

internal class SessionTokenService(
    private val sdk: ShopSDK
) {
    fun setSessionToken(token: String) = sdk.setSessionToken(token)
    fun removeSessionToken() {
        sdk.removeSessionToken()
    }
}