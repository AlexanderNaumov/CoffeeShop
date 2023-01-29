package me.haymob.shop.mappers

import me.haymob.shop.entities.Category
import me.haymob.shopsdk.entities.Category as CategoryDto

internal object CategoryMapper {
    fun categoryFromDto(category: CategoryDto) = Category(
        category.objectId,
        category.name,
        emptyList()
    )
}