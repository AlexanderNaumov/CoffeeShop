package me.haymob.coffeeshop.domain.catalog.actions

import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.entities.Product

internal fun CatalogStore.productsQtyUpdate(products: List<Product>) {
    setState {
        copy(
            categories = categories.map { category ->
                category.copy(
                    products = category.products.map { product ->
                        products.find { it.id == product.id } ?: product.copy(qty = 0)
                    }
                )
            }
        )
    }
}