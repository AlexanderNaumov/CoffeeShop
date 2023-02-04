package me.haymob.shopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.shopsdk.core.GQLObject
import me.haymob.shopsdk.core.field

@Serializable
data class Collection(
    val id: String,
    val name: String,
    val position: Int,
    val children: List<Collection> = emptyList()
): GQLObject

internal val collectionField = field {
    field(Collection::id)
    field(Collection::name)
    field(Collection::position)
    field(Collection::children) {
        field(Collection::id)
        field(Collection::name)
        field(Collection::position)
    }
}