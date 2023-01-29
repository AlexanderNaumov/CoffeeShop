package me.haymob.shop.domain.customer.actions

import me.haymob.shop.domain.customer.CustomerEffect
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.mappers.CustomerMapper
import me.haymob.shop.mappers.ProductMapper
import me.haymob.shopsdk.entities.User
import me.haymob.shopsdk.entities.UserViewer

internal fun CustomerStore.didLoadUser(result: Result<User>) {
    val user = result.getOrNull()
    val customer = user?.let { CustomerMapper.customerFromDto(it) }
    setState {
        copy(
            customer = customer,
            isLoggedIn = result.isSuccess,
            isLoading = false
        )
    }
    if (result.isSuccess) {
        setEffect(CustomerEffect.Successes)

        val wishlist = user?.wishlist?.edges?.map { ProductMapper.productFromDto(it.node) } ?: emptyList()
        sharedDataService.wishlistDidLoad(wishlist)
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

        val wishlist = viewer?.user?.wishlist?.edges?.map { ProductMapper.productFromDto(it.node) } ?: emptyList()

        sharedDataService.wishlistDidLoad(wishlist)
        val token = viewer!!.sessionToken
        if (token.isNotEmpty()) {
            storage.setCustomerToken(token)
            sessionTokenService.setSessionToken(token)
        }
    }
    if (result.isFailure) {
        setEffect(CustomerEffect.Error(result.exceptionOrNull()?.message ?: "unknown error"))
    }
}