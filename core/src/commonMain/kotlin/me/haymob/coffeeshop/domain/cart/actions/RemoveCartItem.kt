package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.catalog.actions.productSetLoading
import me.haymob.coffeeshop.domain.catalog.actions.productsQtyUpdate
import me.haymob.coffeeshop.entities.Cart
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CartMapper

internal fun CartStore.removeCartItems(items: List<Cart.Item>) {
    setState {
        copy(isLoading = true)
    }

    items.forEach {
        productSetLoading(it.product, true)
        catalogStore.productSetLoading(it.product, true)
    }

    combine(
        items.map {
            shopService.removeItem(it.id)
        }
    ) {
        it.last()
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
            catalogStore.productSetLoading(it.product, false)
        }

        val products = newCart?.items?.map { it.product } ?: emptyList()
        catalogStore.productsQtyUpdate(products)
    }.launchIn(scope)
}