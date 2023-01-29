package me.haymob.shop.entities

import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class Category(
    val id: String,
    val name: String,
    var products: List<Product>
)