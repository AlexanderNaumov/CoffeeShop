package me.haymob.shop.mappers

import me.haymob.shop.entities.Product
import me.haymob.shopsdk.entities.Product as ProductDto

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
        false,
        false
    )
}