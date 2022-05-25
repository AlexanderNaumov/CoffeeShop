package me.haymob.coffeeshop.ui.cart

import me.haymob.coffeeshop.entities.Cart
import me.haymob.coffeeshop.store.State

data class CartUIState(
    val cart: Cart? = null,
    val isLoading: Boolean = false,
    val isRefreshing: Boolean = false,
    val isSelectedAllItems: Boolean = false,
    val selectedItems: List<String> = emptyList()
): State {
    fun itemSelected(item: Cart.Item) = selectedItems.contains(item.id)
}