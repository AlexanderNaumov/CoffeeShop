package me.haymob.coffeeshopsdk

import me.haymob.coffeeshopsdk.catalog.categories
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.*

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

fun test() {
    config(
        Config(
            "http://vm71618.haymob.serv-dns.ru:1337/graphql",
            "lrfQ9bQKJDpFFVffvfZN",
            "2MQDMG5ett10fdzOvDWUp46hHRhd5w",
            "",
            true
        )
    )

    val scope = CoroutineScope(Dispatchers.Unconfined + Job())

    categories().catch {
        println("e: ${it.message}")
    }.onEach {
        println("------ $it")
    }.launchIn(scope)

}
