package me.haymob.coffeeshop.domain.catalog

import me.haymob.coffeeshop.entities.Category
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.store.State

internal data class CatalogState(
    val categories: List<Category> = emptyList(),
    val isLoading: Boolean = false
): State