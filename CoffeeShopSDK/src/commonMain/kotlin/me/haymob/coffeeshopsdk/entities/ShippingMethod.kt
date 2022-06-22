package me.haymob.coffeeshopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.GQLObject
import me.haymob.coffeeshopsdk.core.field

@Serializable
data class ShippingMethod(
    val objectId: String,
    val title: String
): GQLObject

internal val shippingField = field {
    field(ShippingMethod::objectId)
    field(ShippingMethod::title)
}