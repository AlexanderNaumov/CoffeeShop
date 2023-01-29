package me.haymob.shop.ui.cart.actions

import me.haymob.shop.domain.cart.actions.incrementProduct
import me.haymob.shop.entities.Product
import me.haymob.shop.ui.cart.CartUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CartUIStore.incrementProduct(product: Product) = cartStore.incrementProduct(product)