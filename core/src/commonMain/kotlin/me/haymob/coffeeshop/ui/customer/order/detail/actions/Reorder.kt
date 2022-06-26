package me.haymob.coffeeshop.ui.customer.order.detail.actions

import me.haymob.coffeeshop.domain.cart.actions.reorder
import me.haymob.coffeeshop.ui.customer.order.detail.OrderDetailUIStore

fun OrderDetailUIStore.reorder() {
    cartStore.reorder(currentState.order)
}