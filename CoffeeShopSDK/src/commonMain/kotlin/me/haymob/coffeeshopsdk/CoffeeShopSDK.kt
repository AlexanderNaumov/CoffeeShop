package me.haymob.coffeeshopsdk

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import me.haymob.coffeeshopsdk.cart.*

data class Config(
    val url: String,
    val appId: String,
    val masterKey: String,
    val sessionToken: String? = null,
    val isLoggingEnabled: Boolean = false
)

internal var config = Config("", "", "")

fun config(c: Config) {
    config = c
}

fun setSessionToken(token: String) {
    config = config.copy(sessionToken = token)
}

fun removeSessionToken() {
    config = config.copy(sessionToken = null)
}