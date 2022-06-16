package me.haymob.coffeeshop.ui.customer.address.edit.actions

import me.haymob.coffeeshop.entities.FieldType
import me.haymob.coffeeshop.ui.customer.address.edit.EditAddressUIStore

fun EditAddressUIStore.updateField(type: FieldType, value: String) {
    setState {
        copy(fields = fieldsService.updateField(fields, type, value))
    }
}