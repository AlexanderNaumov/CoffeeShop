package me.haymob.coffeeshop.ui.customer

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.withUnretained
import me.haymob.coffeeshop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class CustomerUIStore(
    internal val customerStore: CustomerStore
): Store<CustomerUIState, Unit>(CustomerUIState()) {
    init {
        customerStore.state.withUnretained(this) { store, customerState ->
            store.setState {
                copy(
                    isLoggedIn = customerState.isLoggedIn,
                    isLoading = customerState.isLoading
                )
            }
        }.launchIn(scope)
    }
}