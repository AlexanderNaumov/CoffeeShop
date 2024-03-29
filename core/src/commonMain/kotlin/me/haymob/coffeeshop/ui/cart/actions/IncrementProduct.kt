package me.haymob.coffeeshop.ui.cart.actions

import me.haymob.coffeeshop.domain.cart.actions.incrementProduct
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.ui.cart.CartUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CartUIStore.incrementProduct(product: Product) = cartStore.incrementProduct(product)