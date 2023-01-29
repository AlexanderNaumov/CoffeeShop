package me.haymob.shop.ui.customer.wishlist

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.shop.domain.cart.CartStore
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class WishlistUIStore internal constructor(
    internal val customerStore: CustomerStore,
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