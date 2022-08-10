package me.haymob.coffeeshop.ui.productDetail

import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class ProductDetailUIState(
    val product: Product? = null,
    val isShowWishlist: Boolean = false
): State