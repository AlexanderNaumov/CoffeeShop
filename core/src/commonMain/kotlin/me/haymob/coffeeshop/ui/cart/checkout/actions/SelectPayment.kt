package me.haymob.coffeeshop.ui.cart.checkout.actions

import me.haymob.coffeeshop.entities.PaymentMethod
import me.haymob.coffeeshop.ui.cart.checkout.CheckoutUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CheckoutUIStore.selectPayment(method: PaymentMethod) {
    setState {
        copy(paymentMethodId = if (paymentMethodId != method.id)  method.id else null)
    }
}