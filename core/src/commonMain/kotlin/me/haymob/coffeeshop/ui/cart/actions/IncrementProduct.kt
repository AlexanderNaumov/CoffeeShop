package me.haymob.coffeeshop.ui.cart.actions

import me.haymob.coffeeshop.domain.cart.actions.incrementProduct
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.ui.catalog.CatalogUIStore

fun CatalogUIStore.incrementProduct(product: Product) = cartStore.incrementProduct(product)