package me.haymob.shop.ui.cart.actions

import me.haymob.shop.ui.cart.CartUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CartUIStore.selectAllItems() {
    setState {
        val cart = cart ?: return@setState this
        copy(
            isSelectedAllItems = true,
            selectedItems = cart.items.map { it.id }
        )
    }
}