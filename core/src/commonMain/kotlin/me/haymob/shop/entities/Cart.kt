package me.haymob.shop.entities

import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class Cart(
    val id: String,
    val totalPrice: Price?,
    val items: List<Item>,
    val paymentMethods: List<PaymentMethod>,
    val shippingMethods: List<ShippingMethod>,
    val address: Address?
) {
    data class Item(
        val id: String,
        val product: Product
    )
}