package me.haymob.coffeeshop.ui.customer.address.edit.actions

import me.haymob.coffeeshop.domain.customer.actions.updateAddress
import me.haymob.coffeeshop.entities.FieldType
import me.haymob.coffeeshop.ui.customer.address.edit.EditAddressUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun EditAddressUIStore.updateAddress() {
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

    customerStore.updateAddress(addressId, firstName, lastName, city, street, postcode)
}