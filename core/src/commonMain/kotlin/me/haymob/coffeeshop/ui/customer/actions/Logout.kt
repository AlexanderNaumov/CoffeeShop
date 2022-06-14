package me.haymob.coffeeshop.ui.customer.actions

import me.haymob.coffeeshop.domain.customer.actions.logout
import me.haymob.coffeeshop.ui.customer.CustomerUIStore

fun CustomerUIStore.logout() = customerStore.logout()