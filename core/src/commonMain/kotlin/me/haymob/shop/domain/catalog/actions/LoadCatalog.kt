package me.haymob.shop.domain.catalog.actions

import kotlinx.coroutines.flow.*
import me.haymob.shop.domain.catalog.CatalogStore
import me.haymob.shop.flow.onResult
import me.haymob.shop.mappers.CategoryMapper
import me.haymob.shop.mappers.ProductMapper

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