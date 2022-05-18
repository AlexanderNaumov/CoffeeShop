package me.haymob.coffeeshop.cart.actions

import kotlinx.coroutines.flow.*
import me.haymob.coffeeshop.cart.CartStore
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.mappers.CartMapper
import me.haymob.coffeeshop.cart.CartEffect

fun CartStore.addProduct(product: Product) {
    setState {
        copy(isLoading = true)
    }
    setEffect(CartEffect.Edit(listOf(product)))
    (currentState.cart?.let { cart ->
        cart.items.find { it.product.id == product.id }?.let {
            shopService.updateItem(it.id, product.qty)
        } ?: shopService.addProduct(cart.id, product.id, product.qty)
    } ?: shopService.createCart().onEach {
        cartService.setCartId(it.objectId)
    }.flatMapMerge {
        shopService.addProduct(it.objectId, product.id, product.qty)
    }).catch {
        setState {
            copy(
                cart = null,
                isLoading = false
            )
        }
        setEffect(CartEffect.DidLoad(emptyList()))
    }.onEach { cart ->
        val newCart = CartMapper.cartFromDto(cart)
        setState {
            copy(
                cart = newCart,
                isLoading = false
            )
        }
        setEffect(CartEffect.DidLoad(newCart.items.map { it.product }))
    }.launchIn(scope)
}