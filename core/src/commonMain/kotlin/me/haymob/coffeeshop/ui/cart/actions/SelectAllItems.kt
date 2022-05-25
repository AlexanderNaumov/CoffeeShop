package me.haymob.coffeeshop.ui.cart.actions

import me.haymob.coffeeshop.ui.cart.CartUIStore

fun CartUIStore.selectAllItems() {
    setState {
        val cart = cart ?: return@setState this
        copy(
            isSelectedAllItems = true,
            selectedItems = cart.items.map { it.id }
        )
    }
}