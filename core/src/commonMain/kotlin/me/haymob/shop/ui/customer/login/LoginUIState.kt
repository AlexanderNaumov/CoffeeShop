package me.haymob.shop.ui.customer.login

import me.haymob.shop.entities.Field
import me.haymob.shop.entities.FieldType
import me.haymob.shop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class LoginUIState(
    val fields: List<Field> = listOf(
        Field(FieldType.Email),
        Field(FieldType.Password)
    ),
    val isLoading: Boolean = false
): State