package me.haymob.coffeeshop.ui.cart.actions

import me.haymob.coffeeshop.ui.cart.CartUIStore

fun CartUIStore.selectCartItem(index: Int) {
    val cart = currentState.cart ?: return

    val item = cart.items[index]


}