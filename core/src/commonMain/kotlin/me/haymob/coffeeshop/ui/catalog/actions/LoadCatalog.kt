package me.haymob.coffeeshop.ui.catalog.actions

import me.haymob.coffeeshop.domain.catalog.actions.loadCatalog
import me.haymob.coffeeshop.ui.catalog.CatalogUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CatalogUIStore.loadCatalog() = catalogStore.loadCatalog()