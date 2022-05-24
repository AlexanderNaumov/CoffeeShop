package me.haymob.coffeeshop.mappers

import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshopsdk.entities.Product as ProductDto

internal object ProductMapper {
    fun productFromDto(product: ProductDto) = Product(
        product.objectId,
        product.body,
        product.roast,
        product.name,
        product.acidity,
        product.region.name,
        product.description,
        product.thumbnail.url,
        PriceMapper.priceFromDto(product.price),
        product.categories.edges.map { it.node.objectId },
        0,
        false
    )
}