package me.haymob.coffeeshop.domain.catalog.actions

import kotlinx.coroutines.flow.*
import me.haymob.coffeeshop.domain.cart.actions.loadCart
import me.haymob.coffeeshop.domain.catalog.CatalogEffect
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.mappers.CategoryMapper
import me.haymob.coffeeshop.mappers.ProductMapper

internal fun CatalogStore.loadCatalog() {
    setState {
        copy(isLoading = true)
    }
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
    }.catch {
        emit(emptyList())
    }.onEach {
        setState {
            copy(
                categories = it,
                isLoading = false
            )
        }
        setEffect(CatalogEffect.DidLoad)
    }.launchIn(scope)
}