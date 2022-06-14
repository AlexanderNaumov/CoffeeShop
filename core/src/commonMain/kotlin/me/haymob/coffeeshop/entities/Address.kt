package me.haymob.coffeeshop.entities

data class Address(
    val objectId: String,
    val firstName: String,
    val secondName: String,
    val city: String,
    val street: String,
    val postcode: Int
)