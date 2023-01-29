package me.haymob.shop.ui.customer.address.create

import me.haymob.shop.entities.Field
import me.haymob.shop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class CreateAddressUIState(
    val fields: List<Field> = emptyList(),
    val isLoading: Boolean = false
): State