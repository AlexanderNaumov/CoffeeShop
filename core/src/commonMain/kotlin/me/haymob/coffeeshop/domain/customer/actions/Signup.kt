package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult

fun CustomerStore.signup(firstName: String, lastName: String, email: String, password: String) {
    setState { copy(isLoading = true) }
    shopService.signup(firstName, lastName, email, password).onResult { result ->
        didLoadUserViewer(result)
        if (result.isSuccess) {
            setEffect(CustomerEffect.WasAuthorized)
        }
    }.launchIn(scope)
}