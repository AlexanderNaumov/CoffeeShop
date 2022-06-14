package me.haymob.coffeeshop.ui.customer.signup.actions

import me.haymob.coffeeshop.entities.FieldType
import me.haymob.coffeeshop.ui.customer.signup.SignupUIStore

fun SignupUIStore.updateField(type: FieldType, value: String) {
    setState {
        copy(fields = fields.map { field ->
            if (field.type == type) {
                field.copy(value = value)
            } else {
                field
            }
        })
    }
}