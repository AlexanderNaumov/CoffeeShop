package me.haymob.coffeeshop.entities

import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class Order(
    val id: String,
    val paymentMethod: PaymentMethod,
    val shippingMethod: ShippingMethod,
    val cartId: String,
    val address: Address,
    val products: List<Product>,
    val totalPrice: Price,
    val createdAt: String
)
