package me.haymob.coffeeshop.ui.customer.order

import me.haymob.coffeeshop.entities.Order
import me.haymob.coffeeshop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class OrderListUIState(
    val orders: List<Order> = emptyList(),
    val isLoading: Boolean = false,
    val isRefreshing: Boolean = false
): State