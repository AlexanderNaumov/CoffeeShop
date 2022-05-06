package me.haymob.coffeeshop.catalog.actions

import me.haymob.coffeeshop.cart.actions.addProduct
import me.haymob.coffeeshop.catalog.CatalogStore
import me.haymob.coffeeshop.entities.Product

fun CatalogStore.addProductToCart(product: Product) = cartStore.addProduct(product)