package me.haymob.shop.ui.customer.order

import me.haymob.shop.entities.Order
import me.haymob.shop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class OrderListUIState(
    val orders: List<Order> = emptyList(),
    val isLoading: Boolean = false,
    val isRefreshing: Boolean = false
): State