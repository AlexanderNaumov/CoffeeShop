package me.haymob.shop.ui.customer.order.actions

import me.haymob.shop.domain.customer.actions.loadCustomer
import me.haymob.shop.ui.customer.order.OrderListUIStore

fun OrderListUIStore.refreshOrders() {
    setState { copy(isRefreshing = true) }
    customerStore.loadCustomer()
}