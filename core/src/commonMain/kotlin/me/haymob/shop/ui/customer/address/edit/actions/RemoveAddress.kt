package me.haymob.shop.ui.customer.address.edit.actions

import me.haymob.shop.domain.customer.actions.removeAddress
import me.haymob.shop.ui.customer.address.edit.EditAddressUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun EditAddressUIStore.removeAddress() {
    customerStore.removeAddress(addressId)
}