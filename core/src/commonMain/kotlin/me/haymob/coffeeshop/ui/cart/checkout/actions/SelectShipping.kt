package me.haymob.coffeeshop.ui.cart.checkout.actions

import me.haymob.coffeeshop.entities.ShippingMethod
import me.haymob.coffeeshop.ui.cart.checkout.CheckoutUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CheckoutUIStore.selectShipping(method: ShippingMethod) {
    setState {
        copy(shippingMethodId = if (shippingMethodId != method.id)  method.id else null)
    }
}