package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult

internal fun CustomerStore.login(email: String, password: String) {
    setState { copy(isLoading = true) }
    customerService.login(email, password).onResult { result ->
        didLoadUserViewer(result)
        if (result.isSuccess) sharedDataService.customerAuth(true)
    }.launchIn(scope)
}