package me.haymob.shopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.shopsdk.core.GQLObject
import me.haymob.shopsdk.core.field

@Serializable
data class ShippingMethod(
    val objectId: String,
    val title: String
): GQLObject

internal val shippingField = field {
    field(ShippingMethod::objectId)
    field(ShippingMethod::title)
}