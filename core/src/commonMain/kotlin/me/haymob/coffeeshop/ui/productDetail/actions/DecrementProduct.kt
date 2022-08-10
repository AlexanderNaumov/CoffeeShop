package me.haymob.coffeeshop.ui.productDetail.actions

import me.haymob.coffeeshop.domain.cart.actions.decrementProduct
import me.haymob.coffeeshop.ui.productDetail.ProductDetailUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun ProductDetailUIStore.decrementProduct() {
    val product = currentState.product ?: return
    cartStore.decrementProduct(product)
}