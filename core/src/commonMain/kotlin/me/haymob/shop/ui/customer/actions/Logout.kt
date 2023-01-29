package me.haymob.shop.ui.customer.actions

import me.haymob.shop.domain.customer.actions.logout
import me.haymob.shop.ui.customer.CustomerUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CustomerUIStore.logout() = customerStore.logout()