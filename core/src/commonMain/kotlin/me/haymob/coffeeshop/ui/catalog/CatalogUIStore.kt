package me.haymob.coffeeshop.ui.catalog

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class CatalogUIStore internal constructor(
    internal val catalogStore: CatalogStore,
    internal val cartStore: CartStore
): Store<CatalogUIState, Unit>(CatalogUIState()) {
    init {
        catalogStore.state.onEach {
            setState {
                copy(
                    categories = it.categories,
                    isLoading = it.isLoading,
                    isRefreshing = if (isRefreshing && it.isLoading.not()) false else isRefreshing
                )
            }
        }.launchIn(scope)
    }
}