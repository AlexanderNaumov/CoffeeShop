package me.haymob.shop.mappers

import me.haymob.shopsdk.entities.Address as AddressDTO
import me.haymob.shop.entities.Address

internal object AddressMapper {
    fun addressFromDto(address: AddressDTO) = Address(
        address.objectId,
        address.firstName,
        address.lastName,
        address.city,
        address.street,
        address.postcode
    )
}