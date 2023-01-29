package me.haymob.shop.ui.customer.account

import me.haymob.shop.entities.Field
import me.haymob.shop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class AccountUIState(
    val fields: List<Field> = emptyList(),
    val isLoading: Boolean = false,
    val isRefreshing: Boolean = false
): State