package me.haymob.shop.entities

import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class Customer(
    val id: String,
    val firstName: String,
    val lastName: String,
    val email: String,
    val addresses: List<Address>,
    val wishlist: List<Product>,
    val orders: List<Order>
)