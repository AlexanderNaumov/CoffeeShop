package me.haymob.coffeeshop

import me.haymob.coffeeshop.store.State
import me.haymob.coffeeshop.store.Store
import me.haymob.coffeeshop.ui.catalog.CatalogUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun catalogUIStore() = app.koin.get<CatalogUIStore>()

@_JsExport
fun <S: State>onState(store: Store<S, *>, didSetState: () -> Unit) {
    store.didSetState = didSetState
}