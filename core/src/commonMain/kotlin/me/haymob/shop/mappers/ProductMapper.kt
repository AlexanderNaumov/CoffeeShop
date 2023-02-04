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
        product.variants.map(::productVariantFromDto),
        0,
        false,
        false
    )
    
    private fun productVariantFromDto(variant: ProductDto.Variant) = Product.Variant(
        variant.sku,
        variant.name,
        Price(variant.priceWithTax.toDouble() / 100, variant.currencyCode),
        variant.stockLevel,
        variant.options.map(::productVariantOptionFromDto)
    )

    private fun productVariantOptionFromDto(option: ProductDto.Option) = Product.Variant.Option(
        option.name,
        option.group.name
    )
}