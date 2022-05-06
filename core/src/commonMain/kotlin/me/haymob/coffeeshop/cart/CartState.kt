package me.haymob.coffeeshop.cart

import me.haymob.coffeeshop.entities.Cart
import me.haymob.coffeeshop.store.State

data class CartState(
    val cart: Cart? = null,
    val isLoading: Boolean = false
): State