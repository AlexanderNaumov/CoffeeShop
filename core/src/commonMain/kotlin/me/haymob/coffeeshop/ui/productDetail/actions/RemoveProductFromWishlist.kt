package me.haymob.coffeeshop.ui.productDetail.actions

import me.haymob.coffeeshop.domain.customer.actions.removeProductFromWishlist
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.ui.productDetail.ProductDetailUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun ProductDetailUIStore.removeProductFromWishlist() {
    val product = currentState.product ?: return
    customerStore.removeProductFromWishlist(product)
}