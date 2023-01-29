package me.haymob.shop.domain.catalog.actions

import me.haymob.shop.domain.catalog.CatalogStore
import me.haymob.shop.entities.Product

internal fun CatalogStore.productSetLoading(product: Product, loading: Boolean) {
    setState {
        copy(
            categories = categories.map { category ->
                category.copy(
                    products = category.products.map {
                        if (product.id == it.id) {
                            it.copy(isLoading = loading)
                        } else {
                            it
                        }
                    }
                )
            }
        )
    }
}