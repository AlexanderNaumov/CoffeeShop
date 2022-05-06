package me.haymob.coffeeshop.cart.actions

import me.haymob.coffeeshop.cart.CartEffect
import me.haymob.coffeeshop.cart.CartStore

fun CartStore.deleteCart() {
    launch {
        val cart = currentState.cart ?: return@launch

        setState { copy(isLoading = true) }
        setEffect(CartEffect.Edit(cart.items.map { it.product }))

        shopService.deleteCart(cart.id).collect {
            cartService.removeCartId()
            setState {
                copy(
                    cart = null,
                    isLoading = false
                )
            }
            setEffect(CartEffect.DidLoad(emptyList()))
        }
    }
}