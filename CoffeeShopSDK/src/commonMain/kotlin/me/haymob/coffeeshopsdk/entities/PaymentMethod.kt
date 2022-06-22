package me.haymob.coffeeshopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.GQLObject
import me.haymob.coffeeshopsdk.core.field

@Serializable
data class PaymentMethod(
    val objectId: String,
    val title: String
): GQLObject

internal val paymentField = field {
    field(PaymentMethod::objectId)
    field(PaymentMethod::title)
}