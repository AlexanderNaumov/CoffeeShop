package me.haymob.shop.ui.catalog.actions

import me.haymob.shop.domain.cart.actions.decrementProduct
import me.haymob.shop.ui.catalog.CatalogUIStore
import me.haymob.shop.entities.Product
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CatalogUIStore.decrementProduct(product: Product) = cartStore.decrementProduct(product)