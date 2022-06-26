package me.haymob.coffeeshop.ui.customer.order.detail

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.entities.Order
import me.haymob.coffeeshop.store.Store

class OrderDetailUIStore(
    val cartStore: CartStore,
    order: Order
): Store<OrderDetailUIState, Unit>(OrderDetailUIState(order)) {
    init {
        cartStore.state.onEach {
            setState {
                copy(isLoading = it.isLoading)
            }
        }.launchIn(scope)
    }
}