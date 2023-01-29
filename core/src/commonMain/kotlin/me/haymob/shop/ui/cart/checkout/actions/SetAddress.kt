package me.haymob.shop.ui.cart.checkout.actions

import me.haymob.shop.domain.cart.actions.setAddress
import me.haymob.shop.entities.Address
import me.haymob.shop.ui.cart.checkout.CheckoutUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CheckoutUIStore.setAddress(address: Address) {
    if (currentState.cart?.address?.id == address.id) return
    cartStore.setAddress(address.id)
}