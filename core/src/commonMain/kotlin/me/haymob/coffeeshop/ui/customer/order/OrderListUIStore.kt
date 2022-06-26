package me.haymob.coffeeshop.ui.customer.order

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.store.Store

class OrderListUIStore(
    val customerStore: CustomerStore
): Store<OrderListUIState, Unit>(OrderListUIState()) {
    init {
        customerStore.state.onEach {
            setState {
                copy(
                    orders = it.customer?.orders ?: emptyList(),
                    isLoading = it.isLoading,
                    isRefreshing = if (isRefreshing && !it.isLoading) false else isRefreshing
                )
            }
        }.launchIn(scope)
    }
}