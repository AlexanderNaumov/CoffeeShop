package me.haymob.shop.ui.customer.address.edit.actions

import me.haymob.shop.entities.FieldType
import me.haymob.shop.ui.customer.address.edit.EditAddressUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun EditAddressUIStore.updateField(type: FieldType, value: String) {
    setState {
        copy(fields = fieldsService.updateField(fields, type, value))
    }
}