package me.haymob.shop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.flow.onResult

internal fun CustomerStore.updateCustomer(firstName: String, lastName: String, email: String, password: String?) {
    val id = currentState.customer?.id ?: return
    setState { copy(isLoading = true) }
    customerService.updateUser(id, firstName, lastName, email, password).onResult(::didLoadUserViewer).launchIn(scope)
}