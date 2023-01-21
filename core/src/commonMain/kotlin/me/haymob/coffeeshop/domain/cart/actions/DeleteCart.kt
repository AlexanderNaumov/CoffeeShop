package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore

internal fun CartStore.deleteCart() {
    val cart = currentState.cart ?: return

    setState { copy(isLoading = true) }

    cartService.deleteCart(cart.id).onEach {
        storage.removeCartId()
        setState {
            copy(
                cart = null,
                isLoading = false
            )
        }
    }.launchIn(scope)
}