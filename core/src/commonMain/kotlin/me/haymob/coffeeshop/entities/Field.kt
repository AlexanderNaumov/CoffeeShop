package me.haymob.coffeeshop.entities

import me.haymob.multiplatformannotations._JsExport

@_JsExport
data class Field(
    val type: FieldType,
    val value: String = "",
    val error: String? = null
)