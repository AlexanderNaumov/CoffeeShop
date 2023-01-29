package me.haymob.shopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.shopsdk.core.*

@Serializable
data class Category(
    val objectId: String,
    val name: String
): GQLObject

internal val categoryField = field {
    field(Category::objectId)
    field(Category::name)
}