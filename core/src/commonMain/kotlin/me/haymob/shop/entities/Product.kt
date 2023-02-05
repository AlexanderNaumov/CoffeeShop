package me.haymob.shop.entities

import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class Product(
    val id: String,
    val name: String,
    val description: String,
    val thumbnail: String,
    val images: List<String>,
    val qty: Int,
    val variants: List<Variant>,
    val isLoading: Boolean,
    val isOnWishlist: Boolean
) {
    data class Variant(
        val sku: String,
        val name: String,
        val price: Price,
        val qty: Int,
        val stockLevel: String,
        val options: List<Option>
    ) {
        data class Option(
            val name: String,
            val groupName: String
        )
    }
}