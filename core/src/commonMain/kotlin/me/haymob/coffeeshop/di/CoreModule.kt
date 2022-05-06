package me.haymob.coffeeshop.di

import me.haymob.coffeeshop.services.*
import me.haymob.coffeeshop.catalog.CatalogStore
import me.haymob.coffeeshop.cart.CartStore
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.*

val coreModule = module {
    singleOf(::ShopService)
    singleOf(::CartService)
    singleOf(::CatalogStore)
    singleOf(::CartStore)
}