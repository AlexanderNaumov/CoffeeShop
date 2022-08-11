package me.haymob.coffeeshop.ui.cart

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.store.Store

class CartUIStore(
    val cartStore: CartStore,
    customerStore: CustomerStore
): Store<CartUIState, Unit>(CartUIState()) {
    init {
        cartStore.state.onEach {
            setState {
                copy(
                    cart = it.cart,
                    isLoading = it.isLoading,
                    isRefreshing = if (isRefreshing && it.isLoading.not()) false else isRefreshing
                )
            }
        }.launchIn(scope)
        customerStore.state.onEach {
            setState {
                copy(
                    isShowCheckoutButton = it.isLoggedIn,
                    isActiveCheckoutButton =  it.customer?.addresses?.isNotEmpty() ?: false
                )
            }
        }.launchIn(scope)
    }
}