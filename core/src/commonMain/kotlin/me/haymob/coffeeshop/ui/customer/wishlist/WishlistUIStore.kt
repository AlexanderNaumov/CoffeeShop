package me.haymob.coffeeshop.ui.customer.wishlist

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.store.Store

class WishlistUIStore(
    internal val customerStore: CustomerStore,
    internal val catalogStore: CatalogStore,
    internal val cartStore: CartStore
): Store<WishlistUIState, Unit>(WishlistUIState()) {
    init {
        catalogStore.state.onEach {
            setState {
                copy(
                    wishlist = it.wishlist
                )
            }
        }.launchIn(scope)
        customerStore.state.onEach {
            setState {
                copy(isLoading = it.isLoading)
            }
        }.launchIn(scope)
    }
}