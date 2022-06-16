package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult

fun CustomerStore.updateCustomer(firstName: String, lastName: String, email: String, password: String?) {
    val id = currentState.customer?.id ?: return
    setState { copy(isLoading = true) }
    shopService.updateUser(id, firstName, lastName, email, password).onResult(::didLoadUser).launchIn(scope)
}