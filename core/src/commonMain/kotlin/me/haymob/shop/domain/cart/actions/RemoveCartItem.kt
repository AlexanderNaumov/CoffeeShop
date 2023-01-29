package me.haymob.shop.domain.cart.actions

import kotlinx.coroutines.flow.*
import me.haymob.shop.domain.cart.CartStore
import me.haymob.shop.entities.Cart
import me.haymob.shop.flow.onResult
import me.haymob.shop.mappers.CartMapper

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