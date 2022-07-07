package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.*
import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.entities.Cart
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CartMapper

internal fun CartStore.removeCartItems(items: List<Cart.Item>) {
    setState {
        copy(isLoading = true)
    }

    items.forEach {
        mediator.cartProductSetLoading(it.product, true)
    }

    items.asFlow().flatMapMerge {
        shopService.removeItem(it.id)
    }.onResult { result ->
        val newCart = result.getOrNull()?.let(CartMapper::cartFromDto)
        setState {
            copy(
                cart = newCart ?: cart,
                isLoading = false
            )
        }

        items.forEach {
            mediator.cartProductSetLoading(it.product, false)
        }

        val products = newCart?.items?.map { it.product } ?: emptyList()
        mediator.cartDidLoad(products)
    }.launchIn(scope)
}