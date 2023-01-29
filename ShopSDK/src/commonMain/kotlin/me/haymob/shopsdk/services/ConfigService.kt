package me.haymob.shopsdk.services

data class ConfigState(
    val url: String,
    val appId: String,
    val masterKey: String,
    val sessionToken: String? = null,
    val isLoggingEnabled: Boolean = false
)

internal class ConfigService {
    var state: ConfigState = ConfigState("", "", "")
        private set

    fun config(state: ConfigState) {
        this.state = state
    }

    fun setSessionToken(token: String) {
        state = state.copy(sessionToken = token)
    }

    fun removeSessionToken() {
        state = state.copy(sessionToken = null)
    }
}