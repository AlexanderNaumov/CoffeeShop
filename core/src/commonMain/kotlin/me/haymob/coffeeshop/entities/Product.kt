package me.haymob.coffeeshop.entities

import me.haymob.multiplatformannotations._JsExport

@_JsExport
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
    val qty: Int,
    val isLoading: Boolean,
    val isOnWishlist: Boolean
)