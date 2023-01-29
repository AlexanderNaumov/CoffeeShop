package me.haymob.shop.domain.cart.actions

import me.haymob.shop.domain.cart.CartStore

internal fun CartStore.removeCart() {
    setState { copy(cart = null) }
    sharedDataService.cartDidLoad(emptyList())
    println("remove cart")
}