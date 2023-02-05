package me.haymob.shop.mappers

import me.haymob.shop.entities.Price
import me.haymob.shop.entities.Product
import me.haymob.shopsdk.entities.Product as ProductDto

internal object ProductMapper {
    fun productFromDto(product: ProductDto) = Product(
        product.id,
        product.name,
        product.description,
        product.featuredAsset.source,
        product.assets.map { it.source },
        0,
        product.variants.map(::productVariantFromDto),
        false,
        false
    )
    
    private fun productVariantFromDto(variant: ProductDto.Variant) = Product.Variant(
        variant.sku,
        variant.name,
        Price(variant.priceWithTax.toDouble() / 100, variant.currencyCode),
        0,
        variant.stockLevel,
        variant.options.map(::productVariantOptionFromDto)
    )

    private fun productVariantOptionFromDto(option: ProductDto.Option) = Product.Variant.Option(
        option.name,
        option.group.name
    )
}