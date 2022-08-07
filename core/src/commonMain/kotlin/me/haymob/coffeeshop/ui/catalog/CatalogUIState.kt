package me.haymob.coffeeshop.ui.catalog

import me.haymob.coffeeshop.entities.Category
import me.haymob.coffeeshop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class CatalogUIState(
    val categories: List<Category> = emptyList(),
    val isLoading: Boolean = false,
    val isRefreshing: Boolean = false
): State