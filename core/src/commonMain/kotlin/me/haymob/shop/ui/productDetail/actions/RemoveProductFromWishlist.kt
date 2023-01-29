package me.haymob.shop.ui.productDetail.actions

import me.haymob.shop.domain.customer.actions.removeProductFromWishlist
import me.haymob.shop.ui.productDetail.ProductDetailUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun ProductDetailUIStore.removeProductFromWishlist() {
    val product = currentState.product ?: return
    customerStore.removeProductFromWishlist(product)
}