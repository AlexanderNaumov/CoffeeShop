package me.haymob.coffeeshop.entities

data class Category(
    val id: String,
    val name: String,
    var products: List<Product>
)