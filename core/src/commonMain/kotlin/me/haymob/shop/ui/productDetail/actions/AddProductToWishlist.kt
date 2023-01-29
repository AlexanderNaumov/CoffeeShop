package me.haymob.shop.ui.productDetail.actions

import me.haymob.shop.domain.customer.actions.addProductToWishlist
import me.haymob.shop.ui.productDetail.ProductDetailUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun ProductDetailUIStore.addProductToWishlist() {
    val product = currentState.product ?: return
    customerStore.addProductToWishlist(product)
}