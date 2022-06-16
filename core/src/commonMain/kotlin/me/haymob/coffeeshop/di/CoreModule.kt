package me.haymob.coffeeshop.di

import me.haymob.coffeeshop.domain.services.*
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.mediators.ProductEffectMediator
import me.haymob.coffeeshop.ui.catalog.CatalogUIStore
import me.haymob.coffeeshop.ui.cart.CartUIStore
import me.haymob.coffeeshop.ui.productDetail.ProductDetailUIStore
import me.haymob.coffeeshop.ui.customer.CustomerUIStore
import me.haymob.coffeeshop.ui.customer.login.LoginUIStore
import me.haymob.coffeeshop.ui.customer.signup.SignupUIStore
import me.haymob.coffeeshop.ui.customer.account.AccountUIStore
import me.haymob.coffeeshop.ui.customer.address.list.AddressListUIStore
import me.haymob.coffeeshop.ui.customer.address.create.CreateAddressUIStore
import me.haymob.coffeeshop.ui.customer.address.edit.EditAddressUIStore
import org.koin.core.module.dsl.factoryOf
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.*

val coreModule = module {
    singleOf(::ShopService)
    singleOf(::AppStorage)
    singleOf(::CatalogStore)
    singleOf(::CartStore)
    factoryOf(::CatalogUIStore)
    factoryOf(::CartUIStore)
    factoryOf(::ProductDetailUIStore)
    singleOf(::CustomerStore)
    factoryOf(::CustomerUIStore)
    factoryOf(::LoginUIStore)
    singleOf(::FieldsService)
    singleOf(::SignupUIStore)
    singleOf(::ProductEffectMediator)
    singleOf(::AccountUIStore)
    factoryOf(::AddressListUIStore)
    factoryOf(::CreateAddressUIStore)
    factoryOf(::EditAddressUIStore)
}