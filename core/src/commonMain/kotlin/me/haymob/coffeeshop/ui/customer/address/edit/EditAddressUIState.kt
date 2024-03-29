package me.haymob.coffeeshop.ui.customer.address.edit

import me.haymob.coffeeshop.entities.Field
import me.haymob.coffeeshop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class EditAddressUIState(
    val fields: List<Field> = emptyList(),
    val isLoading: Boolean = false
): State