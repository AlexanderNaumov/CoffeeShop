package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult

internal fun CustomerStore.logout() {
    setState { copy(isLoading = true) }
    customerService.logout().onResult {
        setState {
            copy(
                customer = null,
                isLoggedIn = false,
                isLoading = false
            )
        }
        storage.removeCustomerToken()
        sessionTokenService.removeSessionToken()
        sharedDataService.customerAuth(false)
        sharedDataService.wishlistDidLoad(emptyList())
    }.launchIn(scope)
}