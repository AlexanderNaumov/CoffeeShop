package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.flow.onResult

fun CartStore.createOrder(paymentMethodId: String, shippingMethodId: String) {
    val cartId = currentState.cart?.id ?: return

    setState { copy(isLoading = true) }

    shopService.createOrder(cartId, paymentMethodId, shippingMethodId).onResult { result ->
        setState { copy(isLoading = false) }

        when {
            result.isFailure -> setEffect(CartEffect.Error(result.exceptionOrNull()?.message ?: "unknown error"))
            result.isSuccess -> {
                setEffect(CartEffect.OrderSuccess(result.getOrNull() ?: "null"))
                mediator.orderSuccess()
            }
        }

    }.launchIn(scope)
}