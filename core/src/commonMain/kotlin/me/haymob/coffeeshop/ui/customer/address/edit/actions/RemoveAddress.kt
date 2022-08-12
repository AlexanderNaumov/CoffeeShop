package me.haymob.coffeeshop.ui.customer.address.edit.actions

import me.haymob.coffeeshop.domain.customer.actions.removeAddress
import me.haymob.coffeeshop.ui.customer.address.edit.EditAddressUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun EditAddressUIStore.removeAddress() {
    customerStore.removeAddress(addressId)
}