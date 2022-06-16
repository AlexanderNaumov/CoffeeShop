package me.haymob.coffeeshop.ui.customer.address.create.actions

import me.haymob.coffeeshop.entities.FieldType
import me.haymob.coffeeshop.ui.customer.address.create.CreateAddressUIStore

fun CreateAddressUIStore.updateField(type: FieldType, value: String) {
    setState {
        copy(fields = fieldsService.updateField(fields, type, value))
    }
}