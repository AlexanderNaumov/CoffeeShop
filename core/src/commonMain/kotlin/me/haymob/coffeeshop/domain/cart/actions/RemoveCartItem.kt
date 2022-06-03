package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.events.product.ProductEvent
import me.haymob.coffeeshop.entities.Cart
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CartMapper

internal fun CartStore.removeCartItems(items: List<Cart.Item>) {
    setState {
        copy(isLoading = true)
    }

    items.forEach {
        productEmitter.emit(ProductEvent.ProductSetLoading(it.product, true))
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
            productEmitter.emit(ProductEvent.ProductSetLoading(it.product, false))
        }

        val products = newCart?.items?.map { it.product } ?: emptyList()
        productEmitter.emit(ProductEvent.CartDidLoad(products))
    }.launchIn(scope)
}