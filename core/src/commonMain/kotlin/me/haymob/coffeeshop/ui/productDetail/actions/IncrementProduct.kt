package me.haymob.coffeeshop.ui.productDetail.actions

import me.haymob.coffeeshop.domain.cart.actions.incrementProduct
import me.haymob.coffeeshop.ui.productDetail.ProductDetailUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun ProductDetailUIStore.incrementProduct() {
    val product = currentState.product ?: return
    cartStore.incrementProduct(product)
}