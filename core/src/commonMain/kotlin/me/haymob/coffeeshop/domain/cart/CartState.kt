package me.haymob.coffeeshop.domain.cart

import me.haymob.coffeeshop.entities.Cart
import me.haymob.coffeeshop.store.State

internal data class CartState(
    val cart: Cart? = null,
    val isLoading: Boolean = false
): State