package me.haymob.coffeeshop.domain.cart.actions

import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.mappers.CartMapper
import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.events.product.ProductEvent
import me.haymob.coffeeshop.flow.onResult

internal fun CartStore.loadCart() {
    val cartId = cartService.cartId() ?: return

    setState { copy(isLoading = true) }
    shopService.loadCart(cartId).onResult { result ->
        val newCart = result.getOrNull()?.let(CartMapper::cartFromDto)
        setState {
            copy(
                cart = newCart,
                isLoading = false
            )
        }
        val products = newCart?.items?.map { it.product } ?: emptyList()
        productEmitter.emit(ProductEvent.CartDidLoad(products))
        if (result.isFailure) {
            cartService.removeCartId()
        }
    }.launchIn(scope)
}