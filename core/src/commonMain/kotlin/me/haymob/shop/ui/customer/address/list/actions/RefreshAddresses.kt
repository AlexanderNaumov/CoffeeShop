package me.haymob.shop.ui.customer.address.list.actions

import me.haymob.shop.domain.customer.actions.loadCustomer
import me.haymob.shop.ui.customer.address.list.AddressListUIStore

fun AddressListUIStore.refreshAddresses() {
    setState { copy(isRefreshing = true) }
    customerStore.loadCustomer()
}
