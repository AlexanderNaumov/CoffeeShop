package me.haymob.coffeeshop.ui.customer.account.actions

import me.haymob.coffeeshop.domain.customer.actions.updateCustomer
import me.haymob.coffeeshop.entities.FieldType
import me.haymob.coffeeshop.ui.customer.account.AccountUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun AccountUIStore.updateCustomer() {
    val fields = fieldsService.validateFields(currentState.fields)
    if (!fieldsService.isValidFields(fields)) {
        setState { copy(fields = fields) }
        return
    }

    val firstName = fieldsService.valueOfType(currentState.fields, FieldType.FirstName) ?: return
    val lastName = fieldsService.valueOfType(currentState.fields, FieldType.LastName) ?: return
    val email = fieldsService.valueOfType(currentState.fields, FieldType.Email) ?: return
    val password = fieldsService.valueOfType(currentState.fields, FieldType.NewPassword)

    customerStore.updateCustomer(firstName, lastName, email, password)
}