package me.haymob.shopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.shopsdk.core.GQLObject
import me.haymob.shopsdk.core.field

@Serializable
data class Asset(
    val name: String,
    val source: String
): GQLObject

internal val assetField = field {
    field(Asset::name)
    field(Asset::source)
}