package me.haymob.shop.domain.cart

import me.haymob.shop.entities.Cart
import me.haymob.shop.store.State

internal data class CartState(
    val cart: Cart? = null,
    val isLoading: Boolean = false
): State