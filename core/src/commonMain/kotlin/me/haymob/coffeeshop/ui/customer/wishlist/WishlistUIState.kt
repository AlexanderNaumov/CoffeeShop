package me.haymob.coffeeshop.ui.customer.wishlist

import me.haymob.coffeeshop.store.State
import me.haymob.coffeeshop.entities.Product
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class WishlistUIState(
    val wishlist: List<Product> = emptyList(),
    val isLoading: Boolean = false,
    val isRefreshing: Boolean = false
): State