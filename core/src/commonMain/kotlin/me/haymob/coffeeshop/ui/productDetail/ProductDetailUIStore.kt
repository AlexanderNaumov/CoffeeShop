package me.haymob.coffeeshop.ui.productDetail

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.store.Store

class ProductDetailUIStore(
    internal val catalogStore: CatalogStore,
    internal val cartStore: CartStore,
    product: Product
): Store<ProductDetailUIState, Unit>(ProductDetailUIState(product)) {
    init {
        catalogStore.state.onEach { catalogState ->
            setState {
                copy(
                    product = catalogState.categories.flatMap { it.products }.find { it.id == product.id } ?: product
                )
            }
        }.launchIn(scope)
    }
}