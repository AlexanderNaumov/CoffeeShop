package me.haymob.shop.ui.customer.wishlist

import me.haymob.shop.store.State
import me.haymob.shop.entities.Product
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class WishlistUIState(
    val wishlist: List<Product> = emptyList(),
    val isLoading: Boolean = false,
    val isRefreshing: Boolean = false
): State