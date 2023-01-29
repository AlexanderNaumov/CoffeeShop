package me.haymob.shop.domain.cart.actions

import kotlinx.coroutines.flow.flatMapMerge
import kotlinx.coroutines.flow.launchIn
import me.haymob.shop.domain.cart.CartStore
import me.haymob.shop.entities.Order
import me.haymob.shop.flow.onResult
import me.haymob.shop.mappers.CartMapper

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