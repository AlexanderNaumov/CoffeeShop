package me.haymob.coffeeshop.domain.catalog.actions

import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.entities.Product

fun CatalogStore.productSetWishlist(products: List<Product>) {
    setState {
        copy(
            categories = categories.map { category ->
                category.copy(
                    products = category.products.map { product ->
                        product.copy(isOnWishlist = products.find { product.id == it.id } != null)
                    }
                )
            }
        )
    }
}