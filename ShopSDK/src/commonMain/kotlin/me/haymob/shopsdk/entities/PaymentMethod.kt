package me.haymob.shopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.shopsdk.core.GQLObject
import me.haymob.shopsdk.core.field

@Serializable
data class PaymentMethod(
    val objectId: String,
    val title: String
): GQLObject

internal val paymentField = field {
    field(PaymentMethod::objectId)
    field(PaymentMethod::title)
}