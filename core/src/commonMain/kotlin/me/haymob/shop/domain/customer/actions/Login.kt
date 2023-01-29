package me.haymob.shop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.flow.onResult

internal fun CustomerStore.login(email: String, password: String) {
    setState { copy(isLoading = true) }
    customerService.login(email, password).onResult { result ->
        didLoadUserViewer(result)
        if (result.isSuccess) sharedDataService.customerAuth(true)
    }.launchIn(scope)
}