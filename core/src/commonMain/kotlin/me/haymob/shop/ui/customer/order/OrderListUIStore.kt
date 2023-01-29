package me.haymob.shop.ui.customer.order

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class OrderListUIStore internal constructor(
    internal val customerStore: CustomerStore
): Store<OrderListUIState, Unit>(OrderListUIState()) {
    init {
        customerStore.state.onEach {
            setState {
                copy(
                    orders = it.customer?.orders ?: emptyList(),
                    isLoading = it.isLoading,
                    isRefreshing = if (isRefreshing && it.isLoading.not()) false else isRefreshing
                )
            }
        }.launchIn(scope)
    }
}