package me.haymob.coffeeshopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.*

@Serializable
data class Category(
    val objectId: String,
    val name: String
): GQLObject

internal val categoryField = field<Category> {
    field(Category::objectId)
    field(Category::name)
}