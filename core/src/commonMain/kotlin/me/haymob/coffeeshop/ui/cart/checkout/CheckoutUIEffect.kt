package me.haymob.coffeeshop.ui.cart.checkout

import me.haymob.multiplatformannotations._JsExport

@_JsExport
sealed class CheckoutUIEffect {
    class Error(val message: String): CheckoutUIEffect()
    class OrderSuccess(val id: String): CheckoutUIEffect()
}