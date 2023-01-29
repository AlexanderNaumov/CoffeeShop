package me.haymob.shop.domain.catalog.actions

import me.haymob.shop.domain.catalog.CatalogStore
import me.haymob.shop.entities.Product

internal fun CatalogStore.productSetWishlist(products: List<Product>) {
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