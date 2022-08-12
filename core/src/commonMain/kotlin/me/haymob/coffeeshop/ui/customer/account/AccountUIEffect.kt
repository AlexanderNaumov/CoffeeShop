package me.haymob.coffeeshop.ui.customer.account

import me.haymob.multiplatformannotations._JsExport

@_JsExport
sealed class AccountUIEffect {
    object Successes: AccountUIEffect()
    class Error(val message: String): AccountUIEffect()
}