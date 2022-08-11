package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult

fun CustomerStore.loadCustomer() {
    if (currentState.isLoggedIn.not()) {
        setEffect(CustomerEffect.DidLoadWishlist(emptyList()))
        return
    }
    setState { copy(isLoading = true) }
    shopService.user().onResult(::didLoadUser).launchIn(scope)
}