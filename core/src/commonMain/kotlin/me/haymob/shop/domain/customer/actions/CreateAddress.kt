package me.haymob.shop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.flow.onResult

internal fun CustomerStore.createAddress(firstName: String, lastName: String, city: String, street: String, postcode: String) {
    val customerId = currentState.customer?.id ?: return

    setState { copy(isLoading = true) }
    customerService.createAddress(
        customerId,
        firstName,
        lastName,
        city,
        street,
        postcode
    ).onResult(::didLoadUser).launchIn(scope)
}