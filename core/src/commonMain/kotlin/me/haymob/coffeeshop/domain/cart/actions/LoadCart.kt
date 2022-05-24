package me.haymob.coffeeshop.domain.cart.actions

import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.mappers.CartMapper
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.catalog.actions.productsQtyUpdate

internal fun CartStore.loadCart() {
    val cartId = cartService.cartId() ?: return

    setState { copy(isLoading = true) }
    shopService.loadCart(cartId).catch {
        setState {
            copy(
                cart = null,
                isLoading = false
            )
        }
        catalogStore.productsQtyUpdate(emptyList())
        cartService.removeCartId()
    }.onEach { cart ->
        val newCart = CartMapper.cartFromDto(cart)
        setState {
            copy(
                cart = newCart,
                isLoading = false
            )
        }

        catalogStore.productsQtyUpdate(newCart.items.map { it.product })
    }.launchIn(scope)
}