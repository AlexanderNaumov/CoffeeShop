package me.haymob.coffeeshop.cart.actions

import me.haymob.coffeeshop.cart.CartEffect
import me.haymob.coffeeshop.cart.CartStore
import me.haymob.coffeeshop.entities.Cart
import me.haymob.coffeeshop.mappers.CartMapper

fun CartStore.updateCartItem(item: Cart.Item) {
    launch {
        shopService.updateItem(item.id, item.product.qty).collect { cart ->
            val newCart = CartMapper.cartFromDto(cart)
            setState { copy(cart = newCart) }
            setEffect(CartEffect.DidLoad(newCart.items.map { it.product }))
        }
    }
}