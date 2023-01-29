package me.haymob.shopsdk.di

import org.koin.core.module.dsl.singleOf
import org.koin.dsl.module
import me.haymob.shopsdk.services.*
import me.haymob.shopsdk.ShopSDK
import me.haymob.shopsdk.catalog.CatalogController
import me.haymob.shopsdk.cart.CartController
import me.haymob.shopsdk.customer.CustomerController

val sdkModule = module {
    singleOf(::ConfigService)
    singleOf(::HTTPService)
    singleOf(::ShopSDK)
    singleOf(::CatalogController)
    singleOf(::CartController)
    singleOf(::CustomerController)
}