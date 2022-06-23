package me.haymob.coffeeshop.entities

data class Cart(
    val id: String,
    val totalPrice: Price?,
    val items: List<Item>,
    val paymentMethods: List<PaymentMethod>,
    val shippingMethods: List<ShippingMethod>
) {
    data class Item(
        val id: String,
        val product: Product
    )
}