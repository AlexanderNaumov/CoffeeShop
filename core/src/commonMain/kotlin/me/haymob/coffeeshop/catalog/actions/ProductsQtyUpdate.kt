package me.haymob.coffeeshop.catalog.actions

import me.haymob.coffeeshop.catalog.CatalogStore
import me.haymob.coffeeshop.entities.Product

fun CatalogStore.productsQtyUpdate(products: List<Product>) {
    launch {
        setState {
            copy(
                categories = currentState.categories.map { category ->
                    category.copy(
                        products = category.products.map { product ->
                            products.find { it.id == product.id } ?: product.copy(qty = 0)
                        }
                    )
                }
            )
        }
    }
}