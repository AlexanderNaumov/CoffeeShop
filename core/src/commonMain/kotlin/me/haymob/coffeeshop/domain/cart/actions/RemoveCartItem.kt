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
        productSetLoading(it.product, true)
    }

    items.asFlow().flatMapMerge {
        cartService.removeItem(it.id)
    }.onResult { result ->
        val newCart = result.getOrNull()?.let(CartMapper::cartFromDto)
        setState {
            copy(
                cart = newCart ?: cart,
                isLoading = false
            )
        }

        items.forEach {
            productSetLoading(it.product, false)
        }

        val products = newCart?.items?.map { it.product } ?: emptyList()
        sharedDataService.cartDidLoad(products)
    }.launchIn(scope)
}