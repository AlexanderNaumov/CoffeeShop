package me.haymob.shop.ui.customer.order.detail

import me.haymob.shop.entities.Order
import me.haymob.shop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class OrderDetailUIState(
    val order: Order? = null,
    val isLoading: Boolean = false
): State