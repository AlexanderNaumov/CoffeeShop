package me.haymob.shop.ui.catalog

import me.haymob.shop.entities.Category
import me.haymob.shop.store.State
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class CatalogUIState(
    val categories: List<Category> = emptyList(),
    val isLoading: Boolean = false,
    val isRefreshing: Boolean = false
): State {
    fun numberOfCategory(id: String): Int {
        val index = categories.indexOfFirst { it.id == id }
        return if (index > 0) index else 0
    }
}