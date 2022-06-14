package me.haymob.coffeeshop.domain.customer

import me.haymob.coffeeshop.entities.Customer
import me.haymob.coffeeshop.store.State

data class CustomerState(
    val customer: Customer? = null,
    val isLoggedIn: Boolean = false,
    val isLoading: Boolean = false
): State