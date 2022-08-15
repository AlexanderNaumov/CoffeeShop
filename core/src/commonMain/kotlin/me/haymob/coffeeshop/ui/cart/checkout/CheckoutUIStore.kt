package me.haymob.coffeeshop.ui.cart.checkout

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.cart.actions.setAddress
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.withUnretained
import me.haymob.coffeeshop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class CheckoutUIStore(
    internal val cartStore: CartStore,
    customerStore: CustomerStore
): Store<CheckoutUIState, CheckoutUIEffect>(CheckoutUIState()) {
    init {
        cartStore.state.withUnretained(this) { store, cartState ->
            store.setState {
                copy(
                    cart = cartState.cart,
                    isLoading = cartState.isLoading
                )
            }
        }.launchIn(scope)

        cartStore.effect.withUnretained(this) { store, cartEffect ->
            when (cartEffect) {
                is CartEffect.Error -> store.setEffect(CheckoutUIEffect.Error(cartEffect.message))
                is CartEffect.OrderSuccess -> store.setEffect(CheckoutUIEffect.OrderSuccess(cartEffect.id))
                else -> {}
            }
        }.launchIn(scope)

        customerStore.state.withUnretained(this) { store, customerState ->
            store.setState {
                copy(
                    addresses = customerState.customer?.addresses ?: emptyList()
                )
            }
        }.launchIn(scope)

        state.withUnretained(this) { store, _ ->
            store.setState {
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