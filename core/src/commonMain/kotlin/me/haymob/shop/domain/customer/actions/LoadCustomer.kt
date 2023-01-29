package me.haymob.shop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.flow.onResult

internal fun CustomerStore.loadCustomer() {
    if (currentState.isLoggedIn.not()) {
        sharedDataService.wishlistDidLoad(emptyList())
        return
    }
    setState { copy(isLoading = true) }
    customerService.user().onResult(::didLoadUser).launchIn(scope)
}