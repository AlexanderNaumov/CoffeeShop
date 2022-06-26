package me.haymob.coffeeshop.ui.cart.checkout

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.cart.actions.setAddress
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.store.Store

class CheckoutUIStore(
    val cartStore: CartStore,
    customerStore: CustomerStore
): Store<CheckoutUIState, CheckoutUIEffect>(CheckoutUIState()) {
    init {
        cartStore.state.onEach {
            setState {
                copy(
                    cart = it.cart,
                    isLoading = it.isLoading
                )
            }
        }.launchIn(scope)

        cartStore.effect.onEach { effect ->
            when (effect) {
                is CartEffect.Error -> setEffect(CheckoutUIEffect.Error(effect.message))
                is CartEffect.OrderSuccess -> setEffect(CheckoutUIEffect.OrderSuccess(effect.id))
                else -> {}
            }
        }.launchIn(scope)

        customerStore.state.onEach {
            setState {
                copy(
                    addresses = it.customer?.addresses ?: emptyList()
                )
            }
        }.launchIn(scope)

        state.onEach {
            setState {
                copy(
                    isActiveOrderButton = paymentMethodId != null && shippingMethodId != null
                )
            }
        }.launchIn(scope)

        val addressId = customerStore.currentState.customer?.addresses?.firstOrNull()?.id

        if (addressId != null) {
            cartStore.setAddress(addressId)
        }
    }
}