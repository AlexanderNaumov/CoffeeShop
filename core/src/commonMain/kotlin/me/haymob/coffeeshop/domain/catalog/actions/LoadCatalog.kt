package me.haymob.coffeeshop.domain.catalog.actions

import kotlinx.coroutines.flow.*
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.events.product.ProductEvent
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CategoryMapper
import me.haymob.coffeeshop.mappers.ProductMapper

fun CatalogStore.loadCatalog() {
    setState { copy(isLoading = true) }
    shopService.categories().flatMapMerge { categories ->
        shopService.products(categories.map { it.objectId }).map { products ->
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
        productEmitter.emit(ProductEvent.CatalogDidLoad)
    }.launchIn(scope)
}