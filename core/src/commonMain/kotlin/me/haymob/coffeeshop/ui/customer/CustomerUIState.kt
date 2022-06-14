package me.haymob.coffeeshop.ui.customer

import me.haymob.coffeeshop.store.State

data class CustomerUIState(
    val isLoggedIn: Boolean = false
): State