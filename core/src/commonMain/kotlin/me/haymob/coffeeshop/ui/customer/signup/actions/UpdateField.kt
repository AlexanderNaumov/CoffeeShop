package me.haymob.coffeeshop.ui.customer.signup.actions

import me.haymob.coffeeshop.entities.FieldType
import me.haymob.coffeeshop.ui.customer.signup.SignupUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun SignupUIStore.updateField(type: FieldType, value: String) {
    setState {
        copy(fields = fieldsService.updateField(fields, type, value))
    }
}