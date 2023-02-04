package me.haymob.shop.android.extensions

import me.haymob.shop.entities.Product

fun Product.priceRange(): String {
    val prices = variants.map { it.price.value }.sorted()
    val value = if (prices.count() > 1) "${prices.first()} - ${prices.last()}" else "${prices.first()}"
    val currency = variants.first().price.currency
    return "$value $currency"
}
