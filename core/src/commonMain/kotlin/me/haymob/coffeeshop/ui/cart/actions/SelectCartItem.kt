package me.haymob.coffeeshop.ui.cart.actions

import me.haymob.coffeeshop.ui.cart.CartUIStore
import me.haymob.coffeeshop.entities.Cart

fun CartUIStore.selectCartItem(item: Cart.Item) {
    setState {
        val selectedItems = selectedItems.toMutableList()
        if (selectedItems.contains(item.id)) {
            selectedItems.remove(item.id)
        } else {
            selectedItems.add(item.id)
        }
        copy(
            isSelectedAllItems = false,
            selectedItems = selectedItems
        )
    }
}