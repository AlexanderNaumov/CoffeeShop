package me.haymob.coffeeshop.domain.services

import me.haymob.coffeeshopsdk.CoffeeShopSDK

internal class SessionTokenService(
    private val sdk: CoffeeShopSDK
) {
    fun setSessionToken(token: String) = sdk.setSessionToken(token)
    fun removeSessionToken() {
        sdk.removeSessionToken()
    }
}