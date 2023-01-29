package me.haymob.shop.di

import me.haymob.shop.domain.services.*
import me.haymob.shop.domain.catalog.CatalogStore
import me.haymob.shop.domain.cart.CartStore
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.ui.catalog.CatalogUIStore
import me.haymob.shop.ui.cart.CartUIStore
import me.haymob.shop.ui.cart.checkout.CheckoutUIStore
import me.haymob.shop.ui.productDetail.ProductDetailUIStore
import me.haymob.shop.ui.customer.CustomerUIStore
import me.haymob.shop.ui.customer.login.LoginUIStore
import me.haymob.shop.ui.customer.signup.SignupUIStore
import me.haymob.shop.ui.customer.account.AccountUIStore
import me.haymob.shop.ui.customer.address.list.AddressListUIStore
import me.haymob.shop.ui.customer.address.create.CreateAddressUIStore
import me.haymob.shop.ui.customer.address.edit.EditAddressUIStore
import me.haymob.shop.ui.customer.wishlist.WishlistUIStore
import me.haymob.shop.ui.customer.order.OrderListUIStore
import me.haymob.shop.ui.customer.order.detail.OrderDetailUIStore
import org.koin.core.module.dsl.factoryOf
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.*

val coreModule = module {
    singleOf(::SessionTokenService)
    singleOf(::AppStorage)
    singleOf(::CatalogStore)
    singleOf(::CartStore)
    singleOf(::CustomerStore)
    singleOf(::FieldsService)
    singleOf(::SharedDataService)
    singleOf(::CatalogService)
    singleOf(::CustomerService)
    singleOf(::CartService)
    factoryOf(::CatalogUIStore)
    factoryOf(::CartUIStore)
    factoryOf(::ProductDetailUIStore)
    factoryOf(::CustomerUIStore)
    factoryOf(::LoginUIStore)
    factoryOf(::SignupUIStore)
    factoryOf(::AccountUIStore)
    factoryOf(::AddressListUIStore)
    factoryOf(::CreateAddressUIStore)
    factoryOf(::EditAddressUIStore)
    factoryOf(::WishlistUIStore)
    factoryOf(::CheckoutUIStore)
    factoryOf(::OrderListUIStore)
    factoryOf(::OrderDetailUIStore)
}