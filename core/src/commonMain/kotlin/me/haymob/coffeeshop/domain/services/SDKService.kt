package me.haymob.coffeeshop.domain.services

import me.haymob.coffeeshopsdk.ConfigController

internal class SDKService(
    private val configController: ConfigController
) {
    fun setSessionToken(token: String) = configController.setSessionToken(token)
    fun removeSessionToken() {
        configController.removeSessionToken()
    }
}