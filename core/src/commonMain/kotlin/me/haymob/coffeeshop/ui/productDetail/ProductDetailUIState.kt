package me.haymob.coffeeshop.ui.productDetail

import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.store.State

data class ProductDetailUIState(
    val product: Product,
    val isShowWishlist: Boolean = false
): State