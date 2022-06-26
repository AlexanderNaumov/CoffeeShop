package me.haymob.coffeeshop.ui.cart.checkout

sealed class CheckoutUIEffect {
    class Error(val message: String): CheckoutUIEffect()
    class OrderSuccess(val id: String): CheckoutUIEffect()
}