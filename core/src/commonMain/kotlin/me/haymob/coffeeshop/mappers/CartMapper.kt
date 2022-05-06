package me.haymob.coffeeshop.mappers

import me.haymob.coffeeshopsdk.entities.Cart as CartDto
import me.haymob.coffeeshopsdk.entities.Cart.Item as CartItemDto
import me.haymob.coffeeshop.entities.Cart

internal object CartMapper {
    fun cartFromDto(cart: CartDto) = Cart(
        cart.objectId,
        cart.totalPrice?.let(PriceMapper::priceFromDto),
        cart.items.edges.map { cartItemFromDto(it.node) }
    )

    fun cartItemFromDto(item: CartItemDto) = Cart.Item(
        item.objectId,
        ProductMapper.productFromDto(item.product).copy(qty = item.qty)
    )
}