package me.haymob.coffeeshopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.*

@Serializable
data class File(
    val name: String,
    val url: String
): GQLObject

internal val fileField = field {
    field(File::name)
    field(File::url)
}