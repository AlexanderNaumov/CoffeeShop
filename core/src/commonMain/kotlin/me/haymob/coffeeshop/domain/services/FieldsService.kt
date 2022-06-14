package me.haymob.coffeeshop.domain.services

import me.haymob.coffeeshop.entities.Field
import me.haymob.coffeeshop.entities.FieldType

class FieldsService {
    fun validateFields(fields: List<Field>) = fields.map { field ->
        when (field.type) {
            FieldType.Email -> {
                val error = when {
                    field.value.isEmpty() -> "Field cannot be empty"
                    !isValidEmail(field.value) -> "Invalid email"
                    else -> null
                }
                Field(field.type, field.value, error)
            }
            FieldType.Password -> {
                val error = when {
                    field.value.isEmpty() -> "Field cannot be empty"
                    field.value.length < 6 -> "Minimum length is 6 characters"
                    else -> null
                }
                Field(field.type, field.value, error)
            }
        }
    }

    private fun isValidEmail(email: String) = Regex("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}").matches(email)

    fun isValidFields(fields: List<Field>) = fields.find { it.error != null } == null

    fun valueOfType(fields: List<Field>, type: FieldType) = fields.find { it.type == type }?.value
}