package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.flatMapMerge
import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.entities.Order
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CartMapper

internal fun CartStore.reorder(order: Order) {
    setState { copy(isLoading = true) }
    cartService.reorder(order.id).flatMapMerge {
        cartService.loadCustomerCart()
    }.onResult { result ->
        val newCart = result.getOrNull()?.let(CartMapper::cartFromDto)
        setState {
            copy(
                cart = newCart,
                isLoading = false
            )
        }
        val products = newCart?.items?.map { it.product } ?: emptyList()
        sharedDataService.cartDidLoad(products)
    }.launchIn(scope)
}