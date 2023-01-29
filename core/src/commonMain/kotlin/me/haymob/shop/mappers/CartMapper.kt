package me.haymob.shop.mappers

import me.haymob.shopsdk.entities.Cart as CartDto
import me.haymob.shopsdk.entities.Cart.Item as CartItemDto
import me.haymob.shopsdk.entities.PaymentMethod as PaymentMethodDto
import me.haymob.shopsdk.entities.ShippingMethod as ShippingMethodDto
import me.haymob.shop.entities.Cart
import me.haymob.shop.entities.PaymentMethod
import me.haymob.shop.entities.ShippingMethod

internal object CartMapper {
    fun cartFromDto(cart: CartDto) = Cart(
        cart.objectId,
        cart.totalPrice?.let(PriceMapper::priceFromDto),
        cart.items.edges.map { cartItemFromDto(it.node) },
        cart.paymentMethods.edges.map { paymentMethodFromDto(it.node) },
        cart.shippingMethods.edges.map { shippingMethodFromDto(it.node) },
        cart.address?.let(AddressMapper::addressFromDto)
    )

    fun cartItemFromDto(item: CartItemDto) = Cart.Item(
        item.objectId,
        ProductMapper.productFromDto(item.product).copy(qty = item.qty)
    )

    fun paymentMethodFromDto(method: PaymentMethodDto) = PaymentMethod(
        method.objectId,
        method.title
    )

    fun shippingMethodFromDto(method: ShippingMethodDto) = ShippingMethod(
        method.objectId,
        method.title
    )
}