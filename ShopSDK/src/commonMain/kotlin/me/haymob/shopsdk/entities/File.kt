package me.haymob.shopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.shopsdk.core.*

@Serializable
data class File(
    val name: String,
    val url: String
): GQLObject

internal val fileField = field {
    field(File::name)
    field(File::url)
}