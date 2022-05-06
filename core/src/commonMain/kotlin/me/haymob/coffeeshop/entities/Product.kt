package me.haymob.coffeeshop.entities

data class Product(
    val id: String,
    val body: Int,
    val roast: Int,
    val name: String,
    val acidity: Int,
    var region: String,
    val description: String,
    val thumbnail: String,
    val price: Price,
    val categories: List<String>,
    val qty: Int
)