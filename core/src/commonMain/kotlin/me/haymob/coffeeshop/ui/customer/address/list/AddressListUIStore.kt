package me.haymob.coffeeshop.ui.customer.address.list

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.withUnretained
import me.haymob.coffeeshop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class AddressListUIStore(
    internal val customerStore: CustomerStore
): Store<AddressListUIState, Unit>(AddressListUIState()) {
    init {
        customerStore.state.withUnretained(this) { store, customerState ->
            store.setState {
                copy(
                    addresses = customerState.customer?.addresses ?: emptyList(),
                    isLoading = customerState.isLoading,
                    isRefreshing = if (isRefreshing && customerState.isLoading.not()) false else isRefreshing
                )
            }
        }.launchIn(scope)
    }
}