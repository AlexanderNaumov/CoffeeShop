package me.haymob.coffeeshop.domain.catalog.actions

import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.entities.Product

fun CatalogStore.productSetWishlist(products: List<Product>) {
    val categories = currentState.categories.map { category ->
        category.copy(
            products = category.products.map { product ->
                product.copy(isOnWishlist = products.find { product.id == it.id } != null)
            }
        )
    }
    val allProducts = categories.flatMap { it.products }
    setState {
        copy(
            categories = categories,
            wishlist = products.map { product ->
                val qty = allProducts.find { it.id == product.id }?.qty ?: 0
                product.copy(
                    qty = qty,
                    isOnWishlist = true
                )
            }
        )
    }
}