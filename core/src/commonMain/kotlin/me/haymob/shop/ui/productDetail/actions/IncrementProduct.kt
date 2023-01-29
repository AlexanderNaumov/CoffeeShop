package me.haymob.shop.ui.productDetail.actions

import me.haymob.shop.domain.cart.actions.incrementProduct
import me.haymob.shop.ui.productDetail.ProductDetailUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun ProductDetailUIStore.incrementProduct() {
    val product = currentState.product ?: return
    cartStore.incrementProduct(product)
}