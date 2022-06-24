package me.haymob.coffeeshop.mappers

import me.haymob.coffeeshopsdk.entities.Cart as CartDto
import me.haymob.coffeeshopsdk.entities.Cart.Item as CartItemDto
import me.haymob.coffeeshopsdk.entities.PaymentMethod as PaymentMethodDto
import me.haymob.coffeeshopsdk.entities.ShippingMethod as ShippingMethodDto
import me.haymob.coffeeshop.entities.Cart
import me.haymob.coffeeshop.entities.PaymentMethod
import me.haymob.coffeeshop.entities.ShippingMethod

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