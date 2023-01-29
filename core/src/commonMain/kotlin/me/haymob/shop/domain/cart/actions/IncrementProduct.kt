package me.haymob.shop.domain.cart.actions

import me.haymob.shop.domain.cart.CartStore
import me.haymob.shop.entities.Product

internal fun CartStore.incrementProduct(product: Product) = updateProduct(product.copy(qty = product.qty + 1))