package me.haymob.coffeeshop.mappers

import me.haymob.coffeeshop.entities.Order
import me.haymob.coffeeshopsdk.entities.Order as OrderDto

object OrderMapper {
    fun orderFromDto(order: OrderDto) = Order(
        order.objectId,
        CartMapper.paymentMethodFromDto(order.paymentMethod),
        CartMapper.shippingMethodFromDto(order.shippingMethod),
        order.cart.objectId,
        AddressMapper.addressFromDto(order.cart.address!!),
        order.cart.items.edges.map { ProductMapper.productFromDto(it.node.product).copy(qty = it.node.qty) },
        PriceMapper.priceFromDto(order.cart.totalPrice!!),
        order.createdAt
    )
}