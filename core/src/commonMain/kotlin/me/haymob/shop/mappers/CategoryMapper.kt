package me.haymob.shop.mappers

import me.haymob.shop.entities.Category
import me.haymob.shopsdk.entities.Collection

internal object CategoryMapper {
    fun categoryFromDto(collection: Collection) = Category(
        collection.id,
        collection.name,
        emptyList(),
        emptyList()
    )
}