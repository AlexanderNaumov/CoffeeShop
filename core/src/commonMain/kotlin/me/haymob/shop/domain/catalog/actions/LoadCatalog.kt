package me.haymob.shop.domain.catalog.actions

import kotlinx.coroutines.flow.*
import me.haymob.shop.domain.catalog.CatalogStore
import me.haymob.shop.flow.onResult
import me.haymob.shop.mappers.CategoryMapper
import me.haymob.shop.mappers.ProductMapper
import me.haymob.shopsdk.entities.Product

internal fun CatalogStore.loadCatalog() {
    setState { copy(isLoading = true) }

    combine(
        catalogService.collections(),
        catalogService.products()
    ) { collections, products ->
        collections
            .filter { it.children.isNotEmpty() }
            .sortedBy { it.position }
            .map {
                CategoryMapper.categoryFromDto(it).copy(
                    child = it.children.map { collection ->
                        CategoryMapper.categoryFromDto(collection).copy(
                            products = products
                                .filter { it.collections.any { it.id == collection.id } }
                                .map(ProductMapper::productFromDto)
                        )
                    }
                )
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