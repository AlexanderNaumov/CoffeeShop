package me.haymob.coffeeshop.ui.customer.account.actions

import me.haymob.coffeeshop.entities.FieldType
import me.haymob.coffeeshop.ui.customer.account.AccountUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun AccountUIStore.updateField(type: FieldType, value: String) {
    setState {
        copy(fields = fieldsService.updateField(fields, type, value))
    }
}
