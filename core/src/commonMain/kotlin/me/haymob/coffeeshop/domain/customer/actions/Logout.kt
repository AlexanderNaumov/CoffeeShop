package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult

fun CustomerStore.logout() {
    setState { copy(isLoading = true) }
    shopService.logout().onResult {
        setState {
            copy(
                customer = null,
                isLoggedIn = false,
                isLoading = false
            )
        }
        storage.removeCustomerToken()
        shopService.removeSessionToken()
        setEffect(CustomerEffect.WishlistDidLoad(emptyList()))
        setEffect(CustomerEffect.LeftTheGame)
    }.launchIn(scope)
}