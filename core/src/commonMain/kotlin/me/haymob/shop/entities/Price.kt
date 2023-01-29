package me.haymob.shop.entities

import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class Price(
    val value: Double,
    val currency: String
)