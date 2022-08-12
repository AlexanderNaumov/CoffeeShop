package me.haymob.coffeeshop.ui.customer.order.detail

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.entities.Order
import me.haymob.coffeeshop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class OrderDetailUIStore(
    internal val cartStore: CartStore,
    customerStore: CustomerStore,
    orderId: String
): Store<OrderDetailUIState, Unit>(OrderDetailUIState()) {
    init {
        customerStore.state.onEach { state ->
            setState {
                copy(
                    order = state.customer?.orders?.find { it.id == orderId }
                )
            }
        }.launchIn(scope)
        cartStore.state.onEach {
            setState {
                copy(isLoading = it.isLoading)
            }
        }.launchIn(scope)
    }
}