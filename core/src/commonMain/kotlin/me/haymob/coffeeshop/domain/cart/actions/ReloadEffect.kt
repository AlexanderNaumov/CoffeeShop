package me.haymob.coffeeshop.domain.cart.actions

import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore

fun CartStore.reloadEffect() {
    val items = currentState.cart?.items ?: return
    if (items.isEmpty()) return
    mediator.cartDidLoad(items.map { it.product })
}