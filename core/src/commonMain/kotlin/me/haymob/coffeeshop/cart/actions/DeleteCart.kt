package me.haymob.coffeeshop.cart.actions

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.cart.CartEffect
import me.haymob.coffeeshop.cart.CartStore

fun CartStore.deleteCart() {
    val cart = currentState.cart ?: return

    setState { copy(isLoading = true) }
    setEffect(CartEffect.Edit(cart.items.map { it.product }))

    shopService.deleteCart(cart.id).onEach {
        cartService.removeCartId()
        setState {
            copy(
                cart = null,
                isLoading = false
            )
        }
        setEffect(CartEffect.DidLoad(emptyList()))
    }.launchIn(scope)
}