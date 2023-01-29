package me.haymob.shop.ui.cart.actions

import me.haymob.shop.domain.cart.actions.loadCart
import me.haymob.shop.ui.cart.CartUIStore

fun CartUIStore.refresh() {
    setState { copy(isRefreshing = true) }
    cartStore.loadCart()
}
