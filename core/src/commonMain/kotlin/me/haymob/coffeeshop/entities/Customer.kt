package me.haymob.coffeeshop.entities

data class Customer(
    val id: String,
    val firstName: String,
    val secondName: String,
    val email: String,
    val addresses: List<Address>
)