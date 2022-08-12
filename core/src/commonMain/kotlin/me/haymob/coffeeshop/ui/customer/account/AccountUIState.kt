package me.haymob.coffeeshop.ui.customer.account

import me.haymob.coffeeshop.entities.Field
import me.haymob.coffeeshop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class AccountUIState(
    val fields: List<Field> = emptyList(),
    val isLoading: Boolean = false,
    val isRefreshing: Boolean = false
): State