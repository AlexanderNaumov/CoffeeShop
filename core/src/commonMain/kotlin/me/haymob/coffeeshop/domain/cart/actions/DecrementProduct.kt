package me.haymob.coffeeshop.domain.cart.actions

import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.domain.cart.CartStore

internal fun CartStore.decrementProduct(product: Product) = updateProduct(product.copy(qty = product.qty - 1))