package me.haymob.shop.ui.productDetail

import me.haymob.shop.entities.Product
import me.haymob.shop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class ProductDetailUIState(
    val product: Product? = null,
    val isShowWishlist: Boolean = false,
    var selectedOption: Int = 0
): State {
    val currentVariant: Product.Variant?
        get() = product?.variants?.get(selectedOption)
}