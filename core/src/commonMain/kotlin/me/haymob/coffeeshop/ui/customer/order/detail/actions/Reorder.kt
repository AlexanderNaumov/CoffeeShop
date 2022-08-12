package me.haymob.coffeeshop.ui.customer.order.detail.actions

import me.haymob.coffeeshop.domain.cart.actions.reorder
import me.haymob.coffeeshop.ui.customer.order.detail.OrderDetailUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun OrderDetailUIStore.reorder() {
    val order = currentState.order ?: return
    cartStore.reorder(order)
}