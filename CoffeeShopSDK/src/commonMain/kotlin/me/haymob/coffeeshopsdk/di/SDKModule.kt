package me.haymob.coffeeshopsdk.di

import org.koin.core.module.dsl.singleOf
import org.koin.dsl.module
import me.haymob.coffeeshopsdk.services.*
import me.haymob.coffeeshopsdk.ConfigController
import me.haymob.coffeeshopsdk.catalog.CatalogController
import me.haymob.coffeeshopsdk.cart.CartController
import me.haymob.coffeeshopsdk.customer.CustomerController

val sdkModule = module {
    singleOf(::ConfigService)
    singleOf(::HTTPService)
    singleOf(::ConfigController)
    singleOf(::CatalogController)
    singleOf(::CartController)
    singleOf(::CustomerController)
}