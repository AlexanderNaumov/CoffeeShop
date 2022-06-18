package me.haymob.coffeeshop.ui.productDetail.actions

import me.haymob.coffeeshop.domain.customer.actions.removeProductFromWishlist
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.ui.productDetail.ProductDetailUIStore

fun ProductDetailUIStore.removeProductFromWishlist(product: Product) = customerStore.removeProductFromWishlist(product)