package me.haymob.coffeeshop.ui.customer.login

sealed class LoginUIEffect {
    object Successes: LoginUIEffect()
    class Error(val message: String): LoginUIEffect()
}