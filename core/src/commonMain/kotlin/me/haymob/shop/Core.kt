package me.haymob.shop

import me.haymob.shop.domain.services.AppStorage
import org.koin.core.KoinApplication
import org.koin.core.context.startKoin
import me.haymob.shopsdk.di.sdkModule
import me.haymob.shop.di.coreModule
import me.haymob.shop.domain.cart.CartStore
import me.haymob.shop.domain.cart.actions.loadCart
import me.haymob.shop.domain.cart.actions.loadCustomerCart
import me.haymob.shop.domain.catalog.CatalogStore
import me.haymob.shop.domain.catalog.actions.loadCatalog
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.domain.customer.actions.loadCustomer
import me.haymob.shopsdk.services.ConfigState
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
    val sdk = app.koin.get<me.haymob.shopsdk.ShopSDK>()

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
