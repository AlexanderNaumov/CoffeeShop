package me.haymob.coffeeshop.ui.customer.address.create.actions

import me.haymob.coffeeshop.domain.customer.actions.createAddress
import me.haymob.coffeeshop.entities.FieldType
import me.haymob.coffeeshop.ui.customer.address.create.CreateAddressUIStore

fun CreateAddressUIStore.createAddress() {
    val fields = fieldsService.validateFields(currentState.fields)
    if (!fieldsService.isValidFields(fields)) {
        setState { copy(fields = fields) }
        return
    }

    val firstName = fieldsService.valueOfType(currentState.fields, FieldType.FirstName) ?: return
    val lastName = fieldsService.valueOfType(currentState.fields, FieldType.LastName) ?: return
    val city = fieldsService.valueOfType(currentState.fields, FieldType.City) ?: return
    val street = fieldsService.valueOfType(currentState.fields, FieldType.Street) ?: return
    val postcode = fieldsService.valueOfType(currentState.fields, FieldType.Postcode) ?: return

    customerStore.createAddress(firstName, lastName, city, street, postcode)
}