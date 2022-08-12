package me.haymob.coffeeshop.ui.cart.checkout.actions

import me.haymob.coffeeshop.domain.cart.actions.createOrder
import me.haymob.coffeeshop.ui.cart.checkout.CheckoutUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CheckoutUIStore.createOrder() {
    val paymentMethodId = currentState.paymentMethodId ?: return
    val shippingMethodId = currentState.shippingMethodId ?: return

    cartStore.createOrder(paymentMethodId, shippingMethodId)
}
