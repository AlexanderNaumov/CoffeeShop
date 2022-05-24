package me.haymob.coffeeshop.domain.catalog.actions

import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.entities.Product

fun CatalogStore.productLoadingUpdate(product: Product, loading: Boolean) {
    setState {
        copy(
            categories = currentState.categories.map { category ->
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