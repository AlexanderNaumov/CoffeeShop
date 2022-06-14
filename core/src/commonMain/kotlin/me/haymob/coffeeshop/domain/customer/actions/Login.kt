package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CustomerMapper

fun CustomerStore.login(email: String, password: String) {
    setState { copy(isLoading = true) }
    shopService.login(email, password).onResult { result ->
        val viewer = result.getOrNull()
        setState {
            copy(
                customer = viewer?.let { CustomerMapper.customerFromDto(it.user) },
                isLoggedIn = result.isSuccess,
                isLoading = false
            )
        }
        if (result.isSuccess) {
            setEffect(CustomerEffect.Successes)
            val token = viewer!!.sessionToken
            storage.setCustomerToken(token)
            shopService.setSessionToken(token)
        }
        if (result.isFailure) {
            setEffect(CustomerEffect.Error(result.exceptionOrNull()?.message ?: "unknown error"))
        }
    }.launchIn(scope)
}