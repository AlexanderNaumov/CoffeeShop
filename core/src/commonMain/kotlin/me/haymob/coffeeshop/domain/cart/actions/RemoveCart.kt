package me.haymob.coffeeshop.domain.cart.actions

import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore

internal fun CartStore.removeCart() {
    setState { copy(cart = null) }
    sharedDataService.cartDidLoad(emptyList())
    println("remove cart")
}