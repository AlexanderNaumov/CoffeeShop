package me.haymob.coffeeshop.domain

import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.cart.actions.*
import me.haymob.coffeeshop.domain.cart.actions.loadCart
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.catalog.actions.loadCatalog
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.customer.actions.loadCustomer
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class App internal constructor(
    private val cartStore: CartStore,
    private val catalogStore: CatalogStore,
    private val customerStore: CustomerStore
) {
    fun loggedIn() = customerStore.currentState.isLoggedIn

    fun load() {
        catalogStore.loadCatalog()
        if (customerStore.currentState.isLoggedIn) {
            cartStore.loadCustomerCart()
        } else {
            cartStore.loadCart()
        }
        customerStore.loadCustomer()
    }
}