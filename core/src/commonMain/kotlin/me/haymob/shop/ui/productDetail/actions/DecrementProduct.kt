package me.haymob.shop.ui.productDetail.actions

import me.haymob.shop.domain.cart.actions.decrementProduct
import me.haymob.shop.ui.productDetail.ProductDetailUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun ProductDetailUIStore.decrementProduct() {
    val product = currentState.product ?: return
    cartStore.decrementProduct(product)
}