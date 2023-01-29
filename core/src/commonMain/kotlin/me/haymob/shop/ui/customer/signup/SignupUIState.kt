package me.haymob.shop.ui.customer.signup

import me.haymob.shop.entities.Field
import me.haymob.shop.entities.FieldType
import me.haymob.shop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class SignupUIState(
    val fields: List<Field> = listOf(
        Field(FieldType.FirstName),
        Field(FieldType.LastName),
        Field(FieldType.Email),
        Field(FieldType.Password)
    ),
    val isLoading: Boolean = false
): State