package me.haymob.coffeeshop.mappers

import me.haymob.coffeeshopsdk.entities.User as CustomerDTO
import me.haymob.coffeeshop.entities.Customer
import me.haymob.coffeeshop.mappers.AddressMapper

internal object CustomerMapper {
    fun customerFromDto(customer: CustomerDTO) = Customer(
        customer.objectId,
        customer.firstName,
        customer.lastName,
        customer.email,
        customer.addresses.edges.map { AddressMapper.addressFromDto(it.node) },
        customer.wishlist.edges.map { ProductMapper.productFromDto(it.node) },
        customer.orders.edges.map { OrderMapper.orderFromDto(it.node) }
    )
}