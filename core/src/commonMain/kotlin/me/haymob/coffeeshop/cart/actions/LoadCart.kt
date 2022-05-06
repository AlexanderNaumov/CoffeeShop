package me.haymob.coffeeshop.cart.actions

import me.haymob.coffeeshop.cart.CartStore
import me.haymob.coffeeshop.mappers.CartMapper
import kotlinx.coroutines.flow.catch
import me.haymob.coffeeshop.cart.CartEffect

fun CartStore.loadCart() {
    launch {
        cartService.cartId()?.let {
            shopService.loadCart(it).catch {
                cartService.removeCartId()
            }.collect { cart ->
                val newCart = CartMapper.cartFromDto(cart)
                setState { copy(cart = newCart) }
                setEffect(CartEffect.DidLoad(newCart.items.map { it.product }))
            }
        }
    }
}