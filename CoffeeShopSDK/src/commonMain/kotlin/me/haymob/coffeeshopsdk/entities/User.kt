package me.haymob.coffeeshopsdk.entities

import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.GQLObject
import me.haymob.coffeeshopsdk.core.field

@Serializable
data class User(
    val objectId: String,
    val firstName: String,
    val lastName: String,
    val email: String,
    val addresses: NodeContainer<Address>,
    var wishlist: NodeContainer<Product>
): GQLObject

internal val userField = field {
    field(User::objectId)
    field(User::firstName)
    field(User::lastName)
    field(User::email)
    field(User::addresses) {
        field(NodeContainer<Address>::edges) {
            field(NodeContainer.Node<Address>::node, addressField)
        }
    }
    field(User::wishlist) {
        field(NodeContainer<Product>::edges) {
            field(NodeContainer.Node<Product>::node, productField)
        }
    }
}