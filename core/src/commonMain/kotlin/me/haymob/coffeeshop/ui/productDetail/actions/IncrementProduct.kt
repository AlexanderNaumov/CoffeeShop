package me.haymob.coffeeshop.ui.productDetail.actions

import me.haymob.coffeeshop.domain.cart.actions.incrementProduct
import me.haymob.coffeeshop.ui.productDetail.ProductDetailUIStore

fun ProductDetailUIStore.incrementProduct() = cartStore.incrementProduct(currentState.product)