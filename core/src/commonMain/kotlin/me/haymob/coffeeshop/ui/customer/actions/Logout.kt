package me.haymob.coffeeshop.ui.customer.actions

import me.haymob.coffeeshop.domain.customer.actions.logout
import me.haymob.coffeeshop.ui.customer.CustomerUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CustomerUIStore.logout() = customerStore.logout()