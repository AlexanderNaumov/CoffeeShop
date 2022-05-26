package me.haymob.coffeeshop.ui.cart.actions

import me.haymob.coffeeshop.domain.cart.actions.removeCartItems
import me.haymob.coffeeshop.ui.cart.CartUIStore

fun CartUIStore.removeSelectedItems() {
    val cart = currentState.cart ?: return
    val items = cart.items.filter { currentState.selectedItems.contains(it.id) }
    cartStore.removeCartItems(items)
    setState {
        copy(isSelectedAllItems = false)
    }
}