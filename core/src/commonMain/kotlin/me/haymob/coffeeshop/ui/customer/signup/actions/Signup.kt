package me.haymob.coffeeshop.ui.customer.signup.actions

import me.haymob.coffeeshop.domain.customer.actions.signup
import me.haymob.coffeeshop.entities.FieldType
import me.haymob.coffeeshop.ui.customer.signup.SignupUIStore

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