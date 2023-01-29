package me.haymob.shop.ui.catalog.actions

import me.haymob.shop.domain.cart.actions.incrementProduct
import me.haymob.shop.ui.catalog.CatalogUIStore
import me.haymob.shop.entities.Product
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CatalogUIStore.incrementProduct(product: Product) = cartStore.incrementProduct(product)