package me.haymob.coffeeshop.ui.productDetail.actions

import me.haymob.coffeeshop.domain.customer.actions.addProductToWishlist
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.ui.productDetail.ProductDetailUIStore

fun ProductDetailUIStore.addProductToWishlist(product: Product) = customerStore.addProductToWishlist(product)