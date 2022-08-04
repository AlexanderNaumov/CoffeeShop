package me.haymob.coffeeshop

import me.haymob.coffeeshop.ui.catalog.CatalogUIStore
import me.haymob.coffeeshop.ui.catalog.actions.loadCatalog

fun main() {
    coreInit()

    val store = app.koin.get<CatalogUIStore>()

    store.didSetState = {
        println(store.currentState)
    }

    store.loadCatalog()
}

