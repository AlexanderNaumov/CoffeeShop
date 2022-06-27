package me.haymob.coffeeshop.entities

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
