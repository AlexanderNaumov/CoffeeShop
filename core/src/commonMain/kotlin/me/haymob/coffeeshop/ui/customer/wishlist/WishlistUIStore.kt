package me.haymob.coffeeshop.ui.customer.wishlist

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class WishlistUIStore(
    internal val customerStore: CustomerStore,
    internal val catalogStore: CatalogStore,
    internal val cartStore: CartStore
): Store<WishlistUIState, Unit>(WishlistUIState()) {
    init {
        customerStore.state.onEach {
            setState {
                copy(
                    wishlist = it.customer?.wishlist ?: emptyList(),
                    isLoading = it.isLoading,
                    isRefreshing = if (isRefreshing && it.isLoading.not()) false else isRefreshing
                )
            }
        }.launchIn(scope)
    }
}