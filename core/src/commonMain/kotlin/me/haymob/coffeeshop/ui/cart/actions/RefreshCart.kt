package me.haymob.coffeeshop.ui.cart.actions

import me.haymob.coffeeshop.domain.cart.actions.loadCart
import me.haymob.coffeeshop.ui.cart.CartUIStore

fun CartUIStore.refresh() {
    setState { copy(isRefreshing = true) }
    cartStore.loadCart()
}
