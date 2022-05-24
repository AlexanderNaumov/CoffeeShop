package me.haymob.coffeeshop.ui.cart.actions

import me.haymob.coffeeshop.domain.cart.actions.decrementProduct
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.ui.cart.CartUIStore

fun CartUIStore.decrementProduct(product: Product) = cartStore.decrementProduct(product)