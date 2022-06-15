package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CustomerMapper

fun CustomerStore.updateCustomer(firstName: String, lastName: String, email: String, password: String?) {
    val id = currentState.customer?.id ?: return
    setState { copy(isLoading = true) }
    shopService.updateUser(id, firstName, lastName, email, password).onResult { result ->
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
            if (token.isNotEmpty()) {
                storage.setCustomerToken(token)
                shopService.setSessionToken(token)
            }
        }
        if (result.isFailure) {
            setEffect(CustomerEffect.Error(result.exceptionOrNull()?.message ?: "unknown error"))
        }
    }.launchIn(scope)
}