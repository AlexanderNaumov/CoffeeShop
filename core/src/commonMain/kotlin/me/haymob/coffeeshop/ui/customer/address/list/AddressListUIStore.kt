package me.haymob.coffeeshop.ui.customer.address.list

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.store.Store

class AddressListUIStore(
    val customerStore: CustomerStore
): Store<AddressListUIState, Unit>(AddressListUIState()) {
    init {
        customerStore.state.onEach {
            setState {
                copy(
                    addresses = it.customer?.addresses ?: emptyList(),
                    isLoading = it.isLoading,
                    isRefreshing = if (isRefreshing && !it.isLoading) false else isRefreshing
                )
            }
        }.launchIn(scope)
    }
}