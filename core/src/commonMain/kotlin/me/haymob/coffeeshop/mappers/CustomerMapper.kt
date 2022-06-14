package me.haymob.coffeeshop.mappers

import me.haymob.coffeeshopsdk.entities.User as CustomerDTO
import me.haymob.coffeeshop.entities.Customer
import me.haymob.coffeeshop.mappers.AddressMapper

internal object CustomerMapper {
    fun customerFromDto(customer: CustomerDTO) = Customer(
        customer.objectId,
        customer.firstName,
        customer.secondName,
        customer.email,
        customer.addresses.edges.map { AddressMapper.addressFromDto(it.node) }
    )
}