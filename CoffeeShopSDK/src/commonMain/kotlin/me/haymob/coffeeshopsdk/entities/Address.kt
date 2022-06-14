package me.haymob.coffeeshopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.GQLObject
import me.haymob.coffeeshopsdk.core.field

@Serializable
data class Address(
    val objectId: String,
    val firstName: String,
    val lastName: String,
    val city: String,
    val street: String,
    val postcode: Int
): GQLObject

internal val addressField = field {
    field(Address::objectId)
    field(Address::firstName)
    field(Address::lastName)
    field(Address::city)
    field(Address::street)
    field(Address::postcode)
}