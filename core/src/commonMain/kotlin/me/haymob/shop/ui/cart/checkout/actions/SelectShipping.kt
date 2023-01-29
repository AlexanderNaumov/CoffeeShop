package me.haymob.shop.ui.cart.checkout.actions

import me.haymob.shop.entities.ShippingMethod
import me.haymob.shop.ui.cart.checkout.CheckoutUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CheckoutUIStore.selectShipping(method: ShippingMethod) {
    setState {
        copy(shippingMethodId = if (shippingMethodId != method.id)  method.id else null)
    }
}