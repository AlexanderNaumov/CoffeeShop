package me.haymob.coffeeshop.domain.cart.actions

import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.mappers.CartMapper
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.catalog.actions.productsQtyUpdate
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
        catalogStore.productsQtyUpdate(products)
        if (result.isFailure) {
            cartService.removeCartId()
        }
    }.launchIn(scope)
}