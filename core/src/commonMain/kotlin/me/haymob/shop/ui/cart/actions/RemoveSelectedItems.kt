package me.haymob.shop.ui.cart.actions

import me.haymob.shop.domain.cart.actions.removeCartItems
import me.haymob.shop.ui.cart.CartUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CartUIStore.removeSelectedItems() {
    val cart = currentState.cart ?: return
    val items = cart.items.filter { currentState.selectedItems.contains(it.id) }
    cartStore.removeCartItems(items)
    setState {
        copy(isSelectedAllItems = false)
    }
}