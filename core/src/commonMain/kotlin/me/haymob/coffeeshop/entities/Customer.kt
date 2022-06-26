package me.haymob.coffeeshop.entities

data class Customer(
    val id: String,
    val firstName: String,
    val lastName: String,
    val email: String,
    val addresses: List<Address>,
    val wishlist: List<Product>,
    val orders: List<Order>
)