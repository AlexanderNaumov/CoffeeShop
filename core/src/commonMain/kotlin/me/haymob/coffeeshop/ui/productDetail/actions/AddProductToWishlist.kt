package me.haymob.coffeeshop.ui.productDetail.actions

import me.haymob.coffeeshop.domain.customer.actions.addProductToWishlist
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.ui.productDetail.ProductDetailUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun ProductDetailUIStore.addProductToWishlist() {
    val product = currentState.product ?: return
    customerStore.addProductToWishlist(product)
}