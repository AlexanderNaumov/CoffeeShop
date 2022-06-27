package me.haymob.coffeeshopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.GQLObject
import me.haymob.coffeeshopsdk.core.field

@Serializable
data class Order(
    val objectId: String,
    val paymentMethod: PaymentMethod,
    val shippingMethod: ShippingMethod,
    val cart: Cart,
    val createdAt: String
): GQLObject

internal val orderField = field {
    field(Order::objectId)
    field(Order::paymentMethod, paymentField)
    field(Order::shippingMethod, shippingField)
    field(Order::cart, cartField)
    field(Order::createdAt)
}