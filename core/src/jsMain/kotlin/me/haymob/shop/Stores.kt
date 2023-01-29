package me.haymob.shop

import me.haymob.shop.ui.cart.CartUIStore
import me.haymob.shop.ui.cart.checkout.CheckoutUIStore
import me.haymob.shop.ui.catalog.CatalogUIStore
import me.haymob.shop.ui.customer.CustomerUIStore
import me.haymob.shop.ui.customer.account.AccountUIStore
import me.haymob.shop.ui.customer.address.create.CreateAddressUIStore
import me.haymob.shop.ui.customer.address.edit.EditAddressUIStore
import me.haymob.shop.ui.customer.address.list.AddressListUIStore
import me.haymob.shop.ui.customer.login.LoginUIStore
import me.haymob.shop.ui.customer.order.OrderListUIStore
import me.haymob.shop.ui.customer.order.detail.OrderDetailUIStore
import me.haymob.shop.ui.customer.signup.SignupUIStore
import me.haymob.shop.ui.customer.wishlist.WishlistUIStore
import me.haymob.shop.ui.productDetail.ProductDetailUIStore
import me.haymob.multiplatformannotations._JsExport
import org.koin.core.parameter.ParametersHolder

@_JsExport
fun catalogUIStore() = app.koin.get<CatalogUIStore>()

@_JsExport
fun productDetailUIStore(productId: String) = app.koin.get<ProductDetailUIStore> {
    ParametersHolder(_values = mutableListOf(productId))
}

@_JsExport
fun loginUIStore() = app.koin.get<LoginUIStore>()

@_JsExport
fun signupUIStore() = app.koin.get<SignupUIStore>()

@_JsExport
fun cartUIStore() = app.koin.get<CartUIStore>()

@_JsExport
fun customerUIStore() = app.koin.get<CustomerUIStore>()

@_JsExport
fun accountUIStore() = app.koin.get<AccountUIStore>()

@_JsExport
fun addressListUIStore() = app.koin.get<AddressListUIStore>()

@_JsExport
fun createAddressUIStore() = app.koin.get<CreateAddressUIStore>()

@_JsExport
fun editAddressUIStore(addressId: String) = app.koin.get<EditAddressUIStore> {
    ParametersHolder(_values = mutableListOf(addressId))
}

@_JsExport
fun checkoutUIStore() = app.koin.get<CheckoutUIStore>()

@_JsExport
fun orderListUIStore() = app.koin.get<OrderListUIStore>()

@_JsExport
fun orderDetailUIStore(orderId: String) = app.koin.get<OrderDetailUIStore> {
    ParametersHolder(_values = mutableListOf(orderId))
}

@_JsExport
fun wishlistUIStore() = app.koin.get<WishlistUIStore>()