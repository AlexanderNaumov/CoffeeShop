package me.haymob.coffeeshop.ui.customer.account.actions

import me.haymob.coffeeshop.domain.customer.actions.loadCustomer
import me.haymob.coffeeshop.ui.customer.account.AccountUIStore

fun AccountUIStore.refreshCustomer() {
    setState { copy(isRefreshing = true) }
    customerStore.loadCustomer()
}
