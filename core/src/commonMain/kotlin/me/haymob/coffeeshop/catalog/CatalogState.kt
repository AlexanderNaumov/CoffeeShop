package me.haymob.coffeeshop.catalog

import me.haymob.coffeeshop.entities.Category
import me.haymob.coffeeshop.store.State

data class CatalogState(
    val categories: List<Category> = emptyList(),
    val isLoading: Boolean = false
): State