package me.haymob.coffeeshop.domain.cart.actions

import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.entities.Product

internal fun CartStore.incrementProduct(product: Product) = updateProduct(product.copy(qty = product.qty + 1))