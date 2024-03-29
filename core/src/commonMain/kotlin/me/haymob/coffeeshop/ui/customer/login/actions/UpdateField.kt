package me.haymob.coffeeshop.ui.customer.login.actions

import me.haymob.coffeeshop.entities.FieldType
import me.haymob.coffeeshop.ui.customer.login.LoginUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun LoginUIStore.updateField(type: FieldType, value: String) {
    setState {
        copy(fields = fieldsService.updateField(fields, type, value))
    }
}