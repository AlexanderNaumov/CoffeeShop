package me.haymob.coffeeshop

import me.haymob.coffeeshop.domain.services.AppStorage
import org.koin.core.KoinApplication
import org.koin.core.context.startKoin
import me.haymob.coffeeshopsdk.di.sdkModule
import me.haymob.coffeeshop.di.coreModule
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.cart.actions.loadCart
import me.haymob.coffeeshop.domain.cart.actions.loadCustomerCart
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.catalog.actions.loadCatalog
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.customer.actions.loadCustomer
import me.haymob.coffeeshopsdk.CoffeeShopSDK
import me.haymob.coffeeshopsdk.services.ConfigState
import me.haymob.multiplatformannotations._JsExport

lateinit var app: KoinApplication

fun coreInit() {
    app = startKoin {
        modules(
            sdkModule,
            coreModule
        )
    }

    val storage = app.koin.get<AppStorage>()
    val sdk = app.koin.get<CoffeeShopSDK>()

    sdk.config(ConfigState(
        "http://vm71618.haymob.serv-dns.ru:1337/graphql",
        "lrfQ9bQKJDpFFVffvfZN",
        "2MQDMG5ett10fdzOvDWUp46hHRhd5w",
        storage.customerToken(),
        false
    ))
}

@_JsExport
fun startApp() {
    val cartStore = app.koin.get<CartStore>()
    val catalogStore = app.koin.get<CatalogStore>()
    val customerStore = app.koin.get<CustomerStore>()

    catalogStore.loadCatalog()
    if (customerStore.currentState.isLoggedIn) {
        cartStore.loadCustomerCart()
    } else {
        cartStore.loadCart()
    }
    customerStore.loadCustomer()
}
