package me.haymob.shop.ui.customer.account.actions

import me.haymob.shop.domain.customer.actions.loadCustomer
import me.haymob.shop.ui.customer.account.AccountUIStore

fun AccountUIStore.refreshCustomer() {
    setState { copy(isRefreshing = true) }
    customerStore.loadCustomer()
}
