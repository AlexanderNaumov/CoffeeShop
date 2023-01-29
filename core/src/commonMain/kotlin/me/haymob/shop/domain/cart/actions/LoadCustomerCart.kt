package me.haymob.shop.domain.cart.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.shop.domain.cart.CartStore
import me.haymob.shop.flow.onResult
import me.haymob.shop.mappers.CartMapper

internal fun CartStore.loadCustomerCart() {
    setState { copy(isLoading = true) }
    cartService.loadCustomerCart().onResult { result ->
        val newCart = result.getOrNull()?.let(CartMapper::cartFromDto)
        setState {
            copy(
                cart = newCart,
                isLoading = false
            )
        }
        val products = newCart?.items?.map { it.product } ?: emptyList()
        sharedDataService.cartDidLoad(products)
    }.launchIn(scope)
}