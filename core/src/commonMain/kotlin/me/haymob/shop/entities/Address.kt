package me.haymob.shop.entities

import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class Address(
    val id: String,
    val firstName: String,
    val lastName: String,
    val city: String,
    val street: String,
    val postcode: String,
)