package me.haymob.coffeeshop.domain.catalog

import me.haymob.coffeeshop.entities.Category
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.store.State

data class CatalogState(
    val categories: List<Category> = emptyList(),
    val wishlist: List<Product> = emptyList(),
    val isLoading: Boolean = false
): State