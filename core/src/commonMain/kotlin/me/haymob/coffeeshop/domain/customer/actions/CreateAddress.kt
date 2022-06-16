package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult

fun CustomerStore.createAddress(firstName: String, lastName: String, city: String, street: String, postcode: String) {
    val customerId = currentState.customer?.id ?: return

    setState { copy(isLoading = true) }
    shopService.createAddress(
        customerId,
        firstName,
        lastName,
        city,
        street,
        postcode
    ).onResult(::didLoadUser).launchIn(scope)
}