package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CartMapper

internal fun CartStore.setAddress(addressId: String) {
    val cartId = currentState.cart?.id ?: return

    setState { copy(isLoading = true) }
    cartService.setAddressOnCart(cartId, addressId).onResult { result ->
        val newCart = result.getOrNull()?.let(CartMapper::cartFromDto)
        setState {
            copy(
                cart = newCart,
                isLoading = false
            )
        }
    }.launchIn(scope)
}