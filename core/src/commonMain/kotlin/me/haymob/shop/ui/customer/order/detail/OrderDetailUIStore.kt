package me.haymob.shop.ui.customer.order.detail

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.shop.domain.cart.CartStore
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class OrderDetailUIStore internal constructor(
    internal val cartStore: CartStore,
    customerStore: CustomerStore,
    orderId: String
): Store<OrderDetailUIState, Unit>(OrderDetailUIState()) {
    init {
        customerStore.state.onEach {
            setState {
                copy(
                    order = it.customer?.orders?.find { it.id == orderId }
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