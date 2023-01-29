package me.haymob.shopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.shopsdk.core.*

@Serializable
data class Region(
    val objectId: String,
    val name: String
): GQLObject

internal val regionField = field {
    field(Region::objectId)
    field(Region::name)
}



