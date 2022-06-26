package me.haymob.coffeeshop.ui.customer.order.detail

import me.haymob.coffeeshop.entities.Order
import me.haymob.coffeeshop.store.State

data class OrderDetailUIState(
    val order: Order,
    val isLoading: Boolean = false
): State