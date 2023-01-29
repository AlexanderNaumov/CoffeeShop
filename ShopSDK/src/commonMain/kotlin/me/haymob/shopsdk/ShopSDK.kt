package me.haymob.shopsdk

import me.haymob.shopsdk.services.ConfigService
import me.haymob.shopsdk.services.ConfigState

class ShopSDK internal constructor(
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