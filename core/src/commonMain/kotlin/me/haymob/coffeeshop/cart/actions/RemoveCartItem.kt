package me.haymob.coffeeshop.cart.actions

import me.haymob.coffeeshop.cart.CartEffect
import me.haymob.coffeeshop.cart.CartStore
import me.haymob.coffeeshop.entities.Cart
import me.haymob.coffeeshop.mappers.CartMapper

fun CartStore.removeCartItem(item: Cart.Item) {
    launch {
        setState {
            copy(isLoading = true)
        }
        setEffect(CartEffect.Edit(listOf(item.product)))

        shopService.removeItem(item.id).collect { cart ->
            val newCart = CartMapper.cartFromDto(cart)
            setState {
                copy(
                    cart = newCart,
                    isLoading = false
                )
            }
            setEffect(CartEffect.DidLoad(newCart.items.map { it.product }))
        }
    }
}