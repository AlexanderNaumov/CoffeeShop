package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult

fun CustomerStore.removeAddress(addressId: String) {
    setState { copy(isLoading = true) }
    shopService.removeAddress(addressId).onResult(::didLoadUser).launchIn(scope)
}
