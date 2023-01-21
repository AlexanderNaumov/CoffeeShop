package me.haymob.coffeeshop.domain.catalog.actions

import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.entities.Product

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