package me.haymob.coffeeshop.ui.customer.wishlist

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.store.Store

class WishlistUIStore(
    internal val customerStore: CustomerStore,
    internal val cartStore: CartStore
): Store<WishlistUIState, Unit>(WishlistUIState()) {
    init {
        customerStore.state.onEach {
            setState {
                copy(
                    wishlist = it.customer?.wishlist ?: emptyList(),
                    isLoading = it.isLoading
                )
            }
        }.launchIn(scope)
    }
}