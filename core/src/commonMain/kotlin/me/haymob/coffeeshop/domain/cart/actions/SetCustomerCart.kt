package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CartMapper

internal fun CartStore.setCustomerCart() {
    val cartId = currentState.cart?.id

    setState { copy(isLoading = true) }
    (cartId?.let {
        cartService.setCustomerCart(cartId)
    } ?: cartService.loadCustomerCart()).onResult { result ->
        val newCart = result.getOrNull()?.let(CartMapper::cartFromDto)
        setState {
            copy(
                cart = newCart,
                isLoading = false
            )
        }
        if (result.isSuccess) {
            storage.removeCartId()
        }
        val products = newCart?.items?.map { it.product } ?: emptyList()
        sharedDataService.cartDidLoad(products)
    }.launchIn(scope)
}