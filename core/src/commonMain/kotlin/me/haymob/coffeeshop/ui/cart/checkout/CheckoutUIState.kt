package me.haymob.coffeeshop.ui.cart.checkout

import me.haymob.coffeeshop.store.State
import me.haymob.coffeeshop.entities.Address
import me.haymob.coffeeshop.entities.Cart
import me.haymob.coffeeshop.entities.PaymentMethod
import me.haymob.coffeeshop.entities.ShippingMethod
import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class CheckoutUIState(
    val cart: Cart? = null,
    val addresses: List<Address> = emptyList(),
    val isLoading: Boolean = false,
    val paymentMethodId: String? = null,
    val shippingMethodId: String? = null,
    val isActiveOrderButton: Boolean = false
): State {
    fun equalAddress(address: Address) = cart?.address?.id == address.id
    fun equalPaymentMethod(method: PaymentMethod) = paymentMethodId == method.id
    fun equalShippingMethod(method: ShippingMethod) = shippingMethodId == method.id
}
