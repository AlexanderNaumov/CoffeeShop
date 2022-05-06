package me.haymob.coffeeshop.mappers

import me.haymob.coffeeshop.entities.Category
import me.haymob.coffeeshopsdk.entities.Product as ProductDto
import me.haymob.coffeeshopsdk.entities.Category as CategoryDto

internal object CategoryMapper {
    fun categoryFromDto(category: CategoryDto) = Category(
        category.objectId,
        category.name,
        emptyList()
    )
}