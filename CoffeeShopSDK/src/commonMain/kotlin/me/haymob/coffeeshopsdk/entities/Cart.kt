package me.haymob.coffeeshopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.*

@Serializable
data class Cart(
    val objectId: String,
    val totalPrice: Price?,
    val items: NodeContainer<Item>,
    val address: Address?,
    val shippingMethods: NodeContainer<ShippingMethod>,
    val paymentMethods: NodeContainer<PaymentMethod>
): GQLObject {
    @Serializable
    data class Item(
        val objectId: String,
        val qty: Int,
        val product: Product
    ): GQLObject
}

internal val cartField = field {
    field(Cart::objectId)
    field(Cart::totalPrice)
    field(Cart::items) {
        field(NodeContainer<Cart.Item>::edges) {
            field(NodeContainer.Node<Cart.Item>::node) {
                field(Cart.Item::objectId)
                field(Cart.Item::qty)
                field(Cart.Item::product, productField)
            }
        }
    }
    field(Cart::shippingMethods) {
        field(NodeContainer<ShippingMethod>::edges) {
            field(NodeContainer.Node<ShippingMethod>::node, shippingField)
        }
    }
    field(Cart::paymentMethods) {
        field(NodeContainer<PaymentMethod>::edges) {
            field(NodeContainer.Node<PaymentMethod>::node, paymentField)
        }
    }
}