package me.haymob.shop.ui.cart

import me.haymob.shop.entities.Cart
import me.haymob.shop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class CartUIState(
    val cart: Cart? = null,
    val isLoading: Boolean = false,
    val isRefreshing: Boolean = false,
    val isSelectedAllItems: Boolean = false,
    val selectedItems: List<String> = emptyList(),
    val isShowCheckoutButton: Boolean = false,
    val isActiveCheckoutButton: Boolean = false
): State {
    fun itemSelected(item: Cart.Item) = selectedItems.contains(item.id)
}