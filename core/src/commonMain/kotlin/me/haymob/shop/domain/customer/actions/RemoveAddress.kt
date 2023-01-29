package me.haymob.shop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.flow.onResult

internal fun CustomerStore.removeAddress(addressId: String) {
    setState { copy(isLoading = true) }
    customerService.removeAddress(addressId).onResult(::didLoadUser).launchIn(scope)
}
