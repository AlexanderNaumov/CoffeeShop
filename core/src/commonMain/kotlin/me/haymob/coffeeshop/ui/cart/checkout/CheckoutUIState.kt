package me.haymob.coffeeshop.ui.cart.checkout

import me.haymob.coffeeshop.store.State
import me.haymob.coffeeshop.entities.Address
import me.haymob.coffeeshop.entities.Cart

data class CheckoutUIState(
    val cart: Cart? = null,
    val addresses: List<Address> = emptyList(),
    val isLoading: Boolean = false
): State