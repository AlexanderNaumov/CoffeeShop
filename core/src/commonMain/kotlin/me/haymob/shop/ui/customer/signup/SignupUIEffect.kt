package me.haymob.shop.ui.customer.signup

import me.haymob.multiplatformannotations._JsExport

@_JsExport
sealed class SignupUIEffect {
    object Successes: SignupUIEffect()
    class Error(val message: String): SignupUIEffect()
}