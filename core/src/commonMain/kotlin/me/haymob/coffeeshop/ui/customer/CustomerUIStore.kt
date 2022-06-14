package me.haymob.coffeeshop.ui.customer

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.store.Store

class CustomerUIStore(
    val customerStore: CustomerStore
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