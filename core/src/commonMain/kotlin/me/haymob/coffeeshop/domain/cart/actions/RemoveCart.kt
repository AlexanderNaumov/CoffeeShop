package me.haymob.coffeeshop.domain.cart.actions

import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore

fun CartStore.removeCart() {
    setState { copy(cart = null) }
    setEffect(CartEffect.DidLoad(emptyList()))
    println("remove cart")
}