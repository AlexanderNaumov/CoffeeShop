package me.haymob.coffeeshop.ui.customer.login.actions

import me.haymob.coffeeshop.domain.customer.actions.login
import me.haymob.coffeeshop.entities.FieldType
import me.haymob.coffeeshop.ui.customer.login.LoginUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun LoginUIStore.login() {
    val fields = fieldsService.validateFields(currentState.fields)
    if (!fieldsService.isValidFields(fields)) {
        setState { copy(fields = fields) }
        return
    }

    val email = fieldsService.valueOfType(currentState.fields, FieldType.Email) ?: return
    val password = fieldsService.valueOfType(currentState.fields, FieldType.Password) ?: return
    customerStore.login(email, password)
}