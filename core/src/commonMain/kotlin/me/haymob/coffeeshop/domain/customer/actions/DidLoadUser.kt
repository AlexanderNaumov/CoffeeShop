package me.haymob.coffeeshop.domain.customer.actions

import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.mappers.CustomerMapper
import me.haymob.coffeeshopsdk.entities.User
import me.haymob.coffeeshopsdk.entities.UserViewer

internal fun CustomerStore.didLoadUser(result: Result<User>) {
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
}

internal fun CustomerStore.didLoadUser(result: Result<UserViewer>) {
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
}