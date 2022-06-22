package me.haymob.coffeeshop.domain.cart.actions

import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore

fun CartStore.reloadEffect() {
    val items = currentState.cart?.items ?: return
    if (items.isEmpty()) return
    setEffect(CartEffect.DidLoad(items.map { it.product }))
}