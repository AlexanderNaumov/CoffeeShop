package me.haymob.shop.ui.customer.address.list

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class AddressListUIStore internal constructor(
    internal val customerStore: CustomerStore
): Store<AddressListUIState, Unit>(AddressListUIState()) {
    init {
        customerStore.state.onEach {
            setState {
                copy(
                    addresses = it.customer?.addresses ?: emptyList(),
                    isLoading = it.isLoading,
                    isRefreshing = if (isRefreshing && it.isLoading.not()) false else isRefreshing
                )
            }
        }.launchIn(scope)
    }
}