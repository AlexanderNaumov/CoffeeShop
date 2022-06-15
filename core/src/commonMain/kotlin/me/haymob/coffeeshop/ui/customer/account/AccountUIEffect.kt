package me.haymob.coffeeshop.ui.customer.account

sealed class AccountUIEffect {
    object Successes: AccountUIEffect()
    class Error(val message: String): AccountUIEffect()
}