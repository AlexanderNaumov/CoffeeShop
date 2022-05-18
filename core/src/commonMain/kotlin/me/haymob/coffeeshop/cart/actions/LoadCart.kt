package me.haymob.coffeeshop.cart.actions

import me.haymob.coffeeshop.cart.CartStore
import me.haymob.coffeeshop.mappers.CartMapper
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.cart.CartEffect

fun CartStore.loadCart() {
    val cartId = cartService.cartId() ?: return

    shopService.loadCart(cartId).catch {
        cartService.removeCartId()
    }.onEach { cart ->
        val newCart = CartMapper.cartFromDto(cart)
        setState { copy(cart = newCart) }
        setEffect(CartEffect.DidLoad(newCart.items.map { it.product }))
    }.launchIn(scope)
}