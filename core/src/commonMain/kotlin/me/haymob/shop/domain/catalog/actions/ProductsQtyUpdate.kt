package me.haymob.shop.domain.catalog.actions

import me.haymob.shop.domain.catalog.CatalogStore
import me.haymob.shop.entities.Product

internal fun CatalogStore.productsQtyUpdate(products: List<Product>) {
    setState {
        copy(
            categories = categories.map { category ->
                category.copy(
                    products = category.products.map { product ->
                        val qty = products.find { it.id == product.id }?.qty ?: 0
                        product.copy(qty = qty)
                    }
                )
            }
        )
    }
}