package me.haymob.coffeeshop.ui.customer.signup

sealed class SignupUIEffect {
    object Successes: SignupUIEffect()
    class Error(val message: String): SignupUIEffect()
}