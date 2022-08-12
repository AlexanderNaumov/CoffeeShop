package me.haymob.coffeeshop.ui.customer.order.detail

import me.haymob.coffeeshop.entities.Order
import me.haymob.coffeeshop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class OrderDetailUIState(
    val order: Order? = null,
    val isLoading: Boolean = false
): State