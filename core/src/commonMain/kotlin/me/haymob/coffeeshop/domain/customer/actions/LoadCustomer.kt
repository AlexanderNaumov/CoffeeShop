package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult

internal fun CustomerStore.loadCustomer() {
    if (currentState.isLoggedIn.not()) {
        sharedDataService.wishlistDidLoad(emptyList())
        return
    }
    setState { copy(isLoading = true) }
    customerService.user().onResult(::didLoadUser).launchIn(scope)
}