package me.haymob.coffeeshop.ui.customer.address.edit.actions

import me.haymob.coffeeshop.domain.customer.actions.removeAddress
import me.haymob.coffeeshop.ui.customer.address.edit.EditAddressUIStore

fun EditAddressUIStore.removeAddress() {
    customerStore.removeAddress(address.id)
}