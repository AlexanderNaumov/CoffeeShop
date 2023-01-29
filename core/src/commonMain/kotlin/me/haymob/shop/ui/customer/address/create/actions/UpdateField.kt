package me.haymob.shop.ui.customer.address.create.actions

import me.haymob.shop.entities.FieldType
import me.haymob.shop.ui.customer.address.create.CreateAddressUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CreateAddressUIStore.updateField(type: FieldType, value: String) {
    setState {
        copy(fields = fieldsService.updateField(fields, type, value))
    }
}