package me.haymob.coffeeshop.ui.customer.order

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.withUnretained
import me.haymob.coffeeshop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class OrderListUIStore(
    internal val customerStore: CustomerStore
): Store<OrderListUIState, Unit>(OrderListUIState()) {
    init {
        customerStore.state.withUnretained(this) { store, customerState ->
            store.setState {
                copy(
                    orders = customerState.customer?.orders ?: emptyList(),
                    isLoading = customerState.isLoading,
                    isRefreshing = if (isRefreshing && customerState.isLoading.not()) false else isRefreshing
                )
            }
        }.launchIn(scope)
    }
}