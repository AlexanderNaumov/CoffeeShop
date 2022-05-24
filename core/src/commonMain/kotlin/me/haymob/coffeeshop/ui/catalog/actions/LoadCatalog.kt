package me.haymob.coffeeshop.ui.catalog.actions

import me.haymob.coffeeshop.domain.catalog.actions.loadCatalog
import me.haymob.coffeeshop.ui.catalog.CatalogUIStore

fun CatalogUIStore.loadCatalog() = catalogStore.loadCatalog()