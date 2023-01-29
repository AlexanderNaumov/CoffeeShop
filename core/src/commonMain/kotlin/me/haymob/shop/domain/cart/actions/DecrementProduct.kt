package me.haymob.shop.domain.cart.actions

import me.haymob.shop.entities.Product
import me.haymob.shop.domain.cart.CartStore

internal fun CartStore.decrementProduct(product: Product) = updateProduct(product.copy(qty = product.qty - 1))