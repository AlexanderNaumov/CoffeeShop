package me.haymob.shop.domain.cart.actions

import me.haymob.shop.domain.cart.CartStore
import me.haymob.shop.mappers.CartMapper
import kotlinx.coroutines.flow.launchIn
import me.haymob.shop.flow.onResult

internal fun CartStore.loadCart() {
    val cartId = currentState.cart?.id ?: storage.cartId() ?: return

    setState { copy(isLoading = true) }
    cartService.loadCart(cartId).onResult { result ->
        val newCart = result.getOrNull()?.let(CartMapper::cartFromDto)
        setState {
            copy(
                cart = newCart,
                isLoading = false
            )
        }
        val products = newCart?.items?.map { it.product } ?: emptyList()
        sharedDataService.cartDidLoad(products)
        if (result.isFailure) {
            storage.removeCartId()
        }
    }.launchIn(scope)
}