package me.haymob.shop.ui.cart.checkout.actions

import me.haymob.shop.entities.PaymentMethod
import me.haymob.shop.ui.cart.checkout.CheckoutUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CheckoutUIStore.selectPayment(method: PaymentMethod) {
    setState {
        copy(paymentMethodId = if (paymentMethodId != method.id)  method.id else null)
    }
}