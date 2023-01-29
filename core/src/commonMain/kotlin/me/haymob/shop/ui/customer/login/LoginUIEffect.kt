package me.haymob.shop.ui.customer.login

import me.haymob.multiplatformannotations._JsExport

@_JsExport
sealed class LoginUIEffect {
    object Successes: LoginUIEffect()
    class Error(val message: String): LoginUIEffect()
}