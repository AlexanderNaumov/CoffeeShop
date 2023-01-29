package me.haymob.shop.domain.services

import me.haymob.shop.entities.Field
import me.haymob.shop.entities.FieldType

internal class FieldsService {
    fun validateFields(fields: List<Field>) = fields.map { field ->
        val error = when {
            field.type != FieldType.NewPassword
                    && field.value.isEmpty() -> "Field cannot be empty"
            field.type == FieldType.Email
                    && !isValidEmail(field.value) -> "Invalid email"
            field.type == FieldType.Password
                    && field.value.length < 6
                    || field.type == FieldType.NewPassword
                    && field.value.isNotEmpty()
                    && field.value.length < 6 -> "Minimum length is 6 characters"
            else -> null
        }
        Field(field.type, field.value, error)
    }

    private fun isValidEmail(email: String) = Regex("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}").matches(email)

    fun isValidFields(fields: List<Field>) = fields.find { it.error != null } == null

    fun valueOfType(fields: List<Field>, type: FieldType) = fields.find { it.type == type }?.value

    fun updateField(fields: List<Field>, type: FieldType, value: String) = fields.map { field ->
        if (field.type == type) {
            field.copy(value = value)
        } else {
            field
        }
    }
}