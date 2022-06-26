package me.haymob.coffeeshop.ui.customer.order.actions

import me.haymob.coffeeshop.domain.customer.actions.loadCustomer
import me.haymob.coffeeshop.ui.customer.order.OrderListUIStore

fun OrderListUIStore.refreshOrders() {
    setState { copy(isRefreshing = true) }
    customerStore.loadCustomer()
}