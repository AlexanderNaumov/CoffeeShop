package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CustomerMapper

fun CustomerStore.loadCustomer() {
    setState { copy(isLoading = true) }
    shopService.user().onResult { result ->
        setState {
            copy(
                customer = result.getOrNull()?.let { CustomerMapper.customerFromDto(it) },
                isLoggedIn = result.isSuccess,
                isLoading = false
            )
        }
        if (result.isSuccess) {
            setEffect(CustomerEffect.Successes)
        }
        if (result.isFailure) {
            setEffect(CustomerEffect.Error(result.exceptionOrNull()?.message ?: "unknown error"))
        }
    }.launchIn(scope)
}