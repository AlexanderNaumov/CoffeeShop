package me.haymob.shop.mappers

import me.haymob.shop.entities.Price
import me.haymob.shopsdk.entities.Price as PriceDto

internal object PriceMapper {
    fun priceFromDto(price: PriceDto) = Price(
        price.value,
        price.currency
    )
}