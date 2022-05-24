package me.haymob.coffeeshop.ui.catalog

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.store.Store

class CatalogUIStore(
    internal val catalogStore: CatalogStore,
    internal val cartStore: CartStore
): Store<CatalogUIState, Unit>(CatalogUIState()) {
    init {
        catalogStore.state.onEach {
            setState {
                copy(
                    categories = it.categories,
                    isLoading = it.isLoading,
                    isRefreshing = if (isRefreshing && !it.isLoading) false else isRefreshing
                )
            }
        }.launchIn(scope)
    }
}