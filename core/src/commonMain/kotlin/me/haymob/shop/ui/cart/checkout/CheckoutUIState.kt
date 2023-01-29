package me.haymob.shop.ui.cart.checkout

import me.haymob.shop.store.State
import me.haymob.shop.entities.Address
import me.haymob.shop.entities.Cart
import me.haymob.shop.entities.PaymentMethod
import me.haymob.shop.entities.ShippingMethod
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
