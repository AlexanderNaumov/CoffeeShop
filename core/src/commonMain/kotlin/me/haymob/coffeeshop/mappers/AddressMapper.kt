package me.haymob.coffeeshop.mappers

import me.haymob.coffeeshopsdk.entities.Address as AddressDTO
import me.haymob.coffeeshop.entities.Address

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