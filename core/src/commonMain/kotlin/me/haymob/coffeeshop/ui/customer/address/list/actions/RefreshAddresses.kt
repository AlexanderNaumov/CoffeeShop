package me.haymob.coffeeshop.ui.customer.address.list.actions

import me.haymob.coffeeshop.domain.customer.actions.loadCustomer
import me.haymob.coffeeshop.ui.customer.address.list.AddressListUIStore

fun AddressListUIStore.refreshAddresses() {
    setState { copy(isRefreshing = true) }
    customerStore.loadCustomer()
}
