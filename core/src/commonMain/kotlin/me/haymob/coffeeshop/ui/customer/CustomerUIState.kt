package me.haymob.coffeeshop.ui.customer

import me.haymob.coffeeshop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class CustomerUIState(
    val isLoggedIn: Boolean = false,
    val isLoading: Boolean = false
): State