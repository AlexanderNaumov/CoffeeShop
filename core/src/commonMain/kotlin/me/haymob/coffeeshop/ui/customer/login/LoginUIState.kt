package me.haymob.coffeeshop.ui.customer.login

import me.haymob.coffeeshop.entities.Field
import me.haymob.coffeeshop.entities.FieldType
import me.haymob.coffeeshop.store.State

data class LoginUIState(
    val fields: List<Field> = listOf(
        Field(FieldType.Email),
        Field(FieldType.Password)
    ),
    val isLoading: Boolean = false
): State