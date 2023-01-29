package me.haymob.shop.domain.catalog

import me.haymob.shop.entities.Category
import me.haymob.shop.store.State

internal data class CatalogState(
    val categories: List<Category> = emptyList(),
    val isLoading: Boolean = false
): State