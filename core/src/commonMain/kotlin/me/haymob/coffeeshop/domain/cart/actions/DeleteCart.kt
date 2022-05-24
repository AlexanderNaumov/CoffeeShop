package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore

internal fun CartStore.deleteCart() {
    val cart = currentState.cart ?: return

    setState { copy(isLoading = true) }

    shopService.deleteCart(cart.id).onEach {
        cartService.removeCartId()
        setState {
            copy(
                cart = null,
                isLoading = false
            )
        }
    }.launchIn(scope)
}