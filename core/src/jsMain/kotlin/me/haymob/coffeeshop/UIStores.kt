package me.haymob.coffeeshop

import me.haymob.coffeeshop.store.State
import me.haymob.coffeeshop.store.Store
import me.haymob.coffeeshop.ui.catalog.CatalogUIStore
import me.haymob.coffeeshop.ui.customer.login.LoginUIStore
import me.haymob.coffeeshop.ui.customer.signup.SignupUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun catalogUIStore() = app.koin.get<CatalogUIStore>()

@_JsExport
fun loginUIStore() = app.koin.get<LoginUIStore>()

@_JsExport
fun signupUIStore() = app.koin.get<SignupUIStore>()