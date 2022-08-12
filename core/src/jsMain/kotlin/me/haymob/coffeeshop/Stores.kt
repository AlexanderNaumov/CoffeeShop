package me.haymob.coffeeshop

import me.haymob.coffeeshop.domain.CombineStore
import me.haymob.coffeeshop.ui.cart.CartUIStore
import me.haymob.coffeeshop.ui.catalog.CatalogUIStore
import me.haymob.coffeeshop.ui.customer.CustomerUIStore
import me.haymob.coffeeshop.ui.customer.account.AccountUIStore
import me.haymob.coffeeshop.ui.customer.login.LoginUIStore
import me.haymob.coffeeshop.ui.customer.signup.SignupUIStore
import me.haymob.coffeeshop.ui.productDetail.ProductDetailUIStore
import me.haymob.multiplatformannotations._JsExport
import org.koin.core.parameter.ParametersHolder

@_JsExport
fun catalogUIStore() = app.koin.get<CatalogUIStore>()

@_JsExport
fun combineStore() = app.koin.get<CombineStore>()

@_JsExport
fun productDetailUIStore(productId: String) = app.koin.get<ProductDetailUIStore>() {
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