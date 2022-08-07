package me.haymob.coffeeshop.ui.catalog.actions

import me.haymob.coffeeshop.domain.cart.actions.incrementProduct
import me.haymob.coffeeshop.ui.catalog.CatalogUIStore
import me.haymob.coffeeshop.entities.Product
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CatalogUIStore.incrementProduct(product: Product) = cartStore.incrementProduct(product)