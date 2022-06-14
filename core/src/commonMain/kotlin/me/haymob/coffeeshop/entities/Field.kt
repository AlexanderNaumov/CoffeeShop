package me.haymob.coffeeshop.entities

data class Field(
    val type: FieldType,
    val value: String = "",
    val error: String? = null
)