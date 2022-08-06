package me.haymob.coffeeshop.entities

import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class ShippingMethod(
    val id: String,
    val title: String
)