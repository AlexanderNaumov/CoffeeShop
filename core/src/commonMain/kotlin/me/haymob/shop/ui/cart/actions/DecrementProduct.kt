package me.haymob.shop.ui.cart.actions

import me.haymob.shop.domain.cart.actions.decrementProduct
import me.haymob.shop.entities.Product
import me.haymob.shop.ui.cart.CartUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun CartUIStore.decrementProduct(product: Product) = cartStore.decrementProduct(product)