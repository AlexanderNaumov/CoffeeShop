package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.catalog.actions.productSetLoading
import me.haymob.coffeeshop.domain.catalog.actions.productsQtyUpdate
import me.haymob.coffeeshop.entities.Cart
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CartMapper

internal fun CartStore.removeCartItem(item: Cart.Item) {
    setState {
        copy(isLoading = true)
    }

    catalogStore.productSetLoading(item.product, true)

    shopService.removeItem(item.id).onResult { result ->
        val newCart = result.getOrNull()?.let(CartMapper::cartFromDto)
        setState {
            copy(
                cart = newCart ?: cart,
                isLoading = false
            )
        }

        catalogStore.productSetLoading(item.product, false)

        val products = newCart?.items?.map { it.product } ?: emptyList()
        catalogStore.productsQtyUpdate(products)
    }.launchIn(scope)
}