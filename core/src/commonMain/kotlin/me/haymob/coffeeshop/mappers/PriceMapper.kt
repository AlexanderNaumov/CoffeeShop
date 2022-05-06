package me.haymob.coffeeshop.mappers

import me.haymob.coffeeshop.entities.Price
import me.haymob.coffeeshopsdk.entities.Price as PriceDto

internal object PriceMapper {
    fun priceFromDto(price: PriceDto) = Price(
        price.value,
        price.currency
    )
}