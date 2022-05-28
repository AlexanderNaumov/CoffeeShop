package me.haymob.coffeeshop.di

import me.haymob.coffeeshop.domain.services.*
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.mediators.ProductMediator
import me.haymob.coffeeshop.ui.catalog.CatalogUIStore
import me.haymob.coffeeshop.ui.cart.CartUIStore
import org.koin.core.module.dsl.factoryOf
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.*

val coreModule = module {
    singleOf(::ShopService)
    singleOf(::CartService)
    singleOf(::CatalogStore)
    singleOf(::CartStore)
    factoryOf(::CatalogUIStore)
    factoryOf(::CartUIStore)
    singleOf(::ProductMediator)
}