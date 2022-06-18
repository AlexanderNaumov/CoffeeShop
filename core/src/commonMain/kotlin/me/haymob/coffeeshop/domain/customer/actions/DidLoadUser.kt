package me.haymob.coffeeshop.domain.customer.actions

import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.mappers.CustomerMapper
import me.haymob.coffeeshopsdk.entities.User
import me.haymob.coffeeshopsdk.entities.UserViewer

internal fun CustomerStore.didLoadUser(result: Result<User>) {
    val customer = result.getOrNull()?.let { CustomerMapper.customerFromDto(it) }
    setState {
        copy(
            customer = customer,
            isLoggedIn = result.isSuccess,
            isLoading = false
        )
    }
    if (result.isSuccess) {
        setEffect(CustomerEffect.Successes)
        setEffect(CustomerEffect.WishlistDidLoad(customer?.wishlist ?: emptyList()))
    }
    if (result.isFailure) {
        setEffect(CustomerEffect.Error(result.exceptionOrNull()?.message ?: "unknown error"))
    }
}


internal fun CustomerStore.didLoadUserViewer(result: Result<UserViewer>) {
    val viewer = result.getOrNull()
    val customer = viewer?.let { CustomerMapper.customerFromDto(it.user) }
    setState {
        copy(
            customer = customer,
            isLoggedIn = result.isSuccess,
            isLoading = false
        )
    }
    if (result.isSuccess) {
        setEffect(CustomerEffect.Successes)
        setEffect(CustomerEffect.WishlistDidLoad(customer?.wishlist ?: emptyList()))
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