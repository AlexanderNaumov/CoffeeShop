package me.haymob.shop.ui.catalog.actions

import me.haymob.shop.domain.catalog.actions.loadCatalog
import me.haymob.shop.ui.catalog.CatalogUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CatalogUIStore.refreshCatalog() {
    setState { copy(isRefreshing = true) }
    catalogStore.loadCatalog()
}