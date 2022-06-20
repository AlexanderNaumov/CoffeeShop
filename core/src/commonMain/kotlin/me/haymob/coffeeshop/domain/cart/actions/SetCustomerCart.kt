package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CartMapper

fun CartStore.setCustomerCart(customerId: String) {
    val cartId = currentState.cart?.id ?: return

    setState { copy(isLoading = true) }
    shopService.loadCustomerCart().onResult { result ->
        val newCart = result.getOrNull()?.let(CartMapper::cartFromDto)
        setState {
            copy(
                cart = newCart,
                isLoading = false
            )
        }
        if (result.isSuccess) {
            storage.removeCartId()
        }
        val products = newCart?.items?.map { it.product } ?: emptyList()
        setEffect(CartEffect.DidLoad(products))
    }.launchIn(scope)
}