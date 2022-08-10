package me.haymob.coffeeshop.ui.customer.signup

import me.haymob.coffeeshop.entities.Field
import me.haymob.coffeeshop.entities.FieldType
import me.haymob.coffeeshop.store.State
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