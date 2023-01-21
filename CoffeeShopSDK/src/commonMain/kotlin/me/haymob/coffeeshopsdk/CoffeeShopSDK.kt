package me.haymob.coffeeshopsdk

import me.haymob.coffeeshopsdk.services.ConfigService
import me.haymob.coffeeshopsdk.services.ConfigState

class CoffeeShopSDK internal constructor(
    private val config: ConfigService
) {
    fun config(state: ConfigState) {
        config.config(state)
    }

    fun setSessionToken(token: String) {
        config.setSessionToken(token)
    }

    fun removeSessionToken() {
        config.removeSessionToken()
    }
}