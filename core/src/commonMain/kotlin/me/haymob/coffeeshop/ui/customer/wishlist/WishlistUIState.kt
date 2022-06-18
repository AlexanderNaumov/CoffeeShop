package me.haymob.coffeeshop.ui.customer.wishlist

import me.haymob.coffeeshop.store.State
import me.haymob.coffeeshop.entities.Product

data class WishlistUIState(
    val wishlist: List<Product> = emptyList(),
    val isLoading: Boolean = false
): State