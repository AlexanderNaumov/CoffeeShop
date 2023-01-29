package me.haymob.shop.ui.customer.signup.actions

import me.haymob.shop.domain.customer.actions.signup
import me.haymob.shop.entities.FieldType
import me.haymob.shop.ui.customer.signup.SignupUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun SignupUIStore.signup() {
    val fields = fieldsService.validateFields(currentState.fields)
    if (!fieldsService.isValidFields(fields)) {
        setState { copy(fields = fields) }
        return
    }

    val firstName = fieldsService.valueOfType(currentState.fields, FieldType.FirstName) ?: return
    val lastName = fieldsService.valueOfType(currentState.fields, FieldType.LastName) ?: return
    val email = fieldsService.valueOfType(currentState.fields, FieldType.Email) ?: return
    val password = fieldsService.valueOfType(currentState.fields, FieldType.Password) ?: return

    customerStore.signup(firstName, lastName, email, password)
}