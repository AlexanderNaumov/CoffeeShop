package me.haymob.shop.ui.customer.login.actions

import me.haymob.shop.domain.customer.actions.login
import me.haymob.shop.entities.FieldType
import me.haymob.shop.ui.customer.login.LoginUIStore
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