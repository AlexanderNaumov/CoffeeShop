package me.haymob.coffeeshop.ui.cart.checkout.actions

import me.haymob.coffeeshop.domain.cart.actions.setAddress
import me.haymob.coffeeshop.entities.Address
import me.haymob.coffeeshop.ui.cart.checkout.CheckoutUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CheckoutUIStore.setAddress(address: Address) {
    if (currentState.cart?.address?.id == address.id) return
    cartStore.setAddress(address.id)
}