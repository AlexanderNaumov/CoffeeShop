package me.haymob.coffeeshop.domain.catalog.actions

import kotlinx.coroutines.flow.*
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CategoryMapper
import me.haymob.coffeeshop.mappers.ProductMapper

internal fun CatalogStore.loadCatalog() {
    setState { copy(isLoading = true) }
    catalogService.categories().flatMapMerge { categories ->
        catalogService.products(categories.map { it.objectId }).map { products ->
            categories.map { category ->
                CategoryMapper.categoryFromDto(category).copy(
                    products = products.filter { product ->
                        product.categories.edges.any { it.node.objectId == category.objectId }
                    }.map(ProductMapper::productFromDto)
                )
            }
        }
    }.onResult {
        setState {
            copy(
                categories = it.getOrNull() ?: emptyList(),
                isLoading = false
            )
        }
        sharedDataService.catalogDidLoad()
    }.launchIn(scope)
}