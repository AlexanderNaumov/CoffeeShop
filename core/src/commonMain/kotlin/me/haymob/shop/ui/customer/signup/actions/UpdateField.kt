package me.haymob.shop.ui.customer.signup.actions

import me.haymob.shop.entities.FieldType
import me.haymob.shop.ui.customer.signup.SignupUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun SignupUIStore.updateField(type: FieldType, value: String) {
    setState {
        copy(fields = fieldsService.updateField(fields, type, value))
    }
}