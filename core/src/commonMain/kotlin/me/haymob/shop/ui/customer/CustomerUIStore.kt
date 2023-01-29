package me.haymob.shop.ui.customer

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class CustomerUIStore internal constructor(
    internal val customerStore: CustomerStore
): Store<CustomerUIState, Unit>(CustomerUIState()) {
    init {
        customerStore.state.onEach {
            setState {
                copy(
                    isLoggedIn = it.isLoggedIn,
                    isLoading = it.isLoading
                )
            }
        }.launchIn(scope)
    }
}