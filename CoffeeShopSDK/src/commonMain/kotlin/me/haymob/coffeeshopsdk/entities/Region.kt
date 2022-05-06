package me.haymob.coffeeshopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.*

@Serializable
data class Region(
    val objectId: String,
    val name: String
): GQLObject

internal val regionField = field<Region> {
    field(Region::objectId)
    field(Region::name)
}



