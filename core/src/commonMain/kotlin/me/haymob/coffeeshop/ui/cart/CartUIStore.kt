package me.haymob.coffeeshop.ui.cart

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.withUnretained
import me.haymob.coffeeshop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class CartUIStore(
    internal val cartStore: CartStore,
    customerStore: CustomerStore
): Store<CartUIState, Unit>(CartUIState()) {
    init {
        cartStore.state.withUnretained(this) { store, cartState ->
            store.setState {
                copy(
                    cart = cartState.cart,
                    isLoading = cartState.isLoading,
                    isRefreshing = if (isRefreshing && cartState.isLoading.not()) false else isRefreshing
                )
            }
        }.launchIn(scope)
        customerStore.state.withUnretained(this) { store, customerState ->
            store.setState {
                copy(
                    isShowCheckoutButton = customerState.isLoggedIn,
                    isActiveCheckoutButton =  customerState.customer?.addresses?.isNotEmpty() ?: false
                )
            }
        }.launchIn(scope)
    }
}