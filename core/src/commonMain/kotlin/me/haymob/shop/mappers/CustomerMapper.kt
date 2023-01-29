package me.haymob.shop.mappers

import me.haymob.shopsdk.entities.User as CustomerDTO
import me.haymob.shop.entities.Customer

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