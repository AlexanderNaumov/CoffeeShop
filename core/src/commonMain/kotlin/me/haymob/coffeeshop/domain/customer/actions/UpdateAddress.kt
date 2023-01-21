package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult

internal fun CustomerStore.updateAddress(addressId: String, firstName: String, lastName: String, city: String, street: String, postcode: String) {
    setState { copy(isLoading = true) }
    customerService.updateAddress(
        addressId,
        firstName,
        lastName,
        city,
        street,
        postcode
    ).onResult(::didLoadUser).launchIn(scope)
}