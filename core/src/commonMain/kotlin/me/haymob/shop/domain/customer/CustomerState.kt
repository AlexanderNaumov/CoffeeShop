package me.haymob.shop.domain.customer

import me.haymob.shop.entities.Customer
import me.haymob.shop.store.State

internal data class CustomerState(
    val customer: Customer? = null,
    val isLoggedIn: Boolean = false,
    val isLoading: Boolean = false
): State