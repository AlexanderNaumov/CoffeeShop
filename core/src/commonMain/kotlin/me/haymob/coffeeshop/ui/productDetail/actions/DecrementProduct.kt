package me.haymob.coffeeshop.ui.productDetail.actions

import me.haymob.coffeeshop.domain.cart.actions.decrementProduct
import me.haymob.coffeeshop.ui.productDetail.ProductDetailUIStore

fun ProductDetailUIStore.decrementProduct() = cartStore.decrementProduct(currentState.product)