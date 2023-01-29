package me.haymob.shop.domain.cart.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.shop.domain.cart.CartStore
import me.haymob.shop.flow.onResult
import me.haymob.shop.mappers.CartMapper

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