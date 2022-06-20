package me.haymob.coffeeshopsdk.cart

import kotlinx.coroutines.flow.map
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.config
import me.haymob.coffeeshopsdk.core.*
import me.haymob.coffeeshopsdk.customer.UserQuery
import me.haymob.coffeeshopsdk.entities.*

@Serializable
private data class CartQuery(val cart: Cart): GQLObject

@Serializable
private data class CreateCartMutation(val createCart: CartQuery)

fun createCart() = http(mutation {
    field(
        CreateCartMutation::createCart,
        "input" of argsOf()
    ) {
        field(CartQuery::cart, cartField)
    }
}).decode<CreateCartMutation>().tryMap { it.createCart.cart }

fun cart(id: String) = http(query {
    field(CartQuery::cart, cartField, "id" of id)
}).decode<CartQuery>().tryMap { it.cart }

@Serializable
private data class DeleteCartMutation(val deleteCart: CartQuery)

fun deleteCart(id: String) = http(mutation {
    field(
        DeleteCartMutation::deleteCart,
        "input" of argsOf("id" of id)
    ) {
        field(CartQuery::cart, cartField)
    }
}).decode<DeleteCartMutation>().tryMap { it.deleteCart.cart }

@Serializable
private data class CartItemQuery(val cartItem: CartQuery): GQLObject

@Serializable
private data class CreateCartItemMutation(val createCartItem: CartItemQuery)

fun addProduct(cartId: String, productId: String, qty: Int) = http(mutation {
    field(
        CreateCartItemMutation::createCartItem,
        "input" of argsOf(
            "fields" of argsOf(
                "cart" of argsOf("link" of cartId),
                "product" of argsOf("link" of productId),
                "qty" of qty
            )
        )
    ) {
        field(CartItemQuery::cartItem) {
            field(CartQuery::cart, cartField)
        }
    }
}).decode<CreateCartItemMutation>().tryMap { it.createCartItem.cartItem.cart }

@Serializable
private data class UpdateCartItemMutation(val updateCartItem: CartItemQuery)

fun updateItem(itemId: String, qty: Int) = http(mutation {
    field(
        UpdateCartItemMutation::updateCartItem,
        "input" of argsOf(
            "id" of itemId,
            "fields" of argsOf(
                "qty" of qty
            )
        )
    ) {
        field(CartItemQuery::cartItem) {
            field(CartQuery::cart, cartField)
        }
    }
}).decode<UpdateCartItemMutation>().tryMap { it.updateCartItem.cartItem.cart }

fun removeItem(itemId: String) = http(mutation {
    field(
        UpdateCartItemMutation::updateCartItem,
        "input" of argsOf(
            "id" of itemId,
            "fields" of argsOf(
                "isRemove" of true
            )
        )
    ) {
        field(CartItemQuery::cartItem) {
            field(CartQuery::cart, cartField)
        }
    }
}).decode<UpdateCartItemMutation>().tryMap { it.updateCartItem.cartItem.cart }

@Serializable
private data class CartUserQuery(val user: CartUser): GQLObject {
    @Serializable
    data class CartUser(val cart: Cart? = null): GQLObject
}

@Serializable
private data class SessionsQuery(val sessions: NodeContainer<CartUserQuery>?)


fun loadCustomerCart(token: String = config.sessionToken ?: "") = http(query {
    field(
        SessionsQuery::sessions,
        "where" of argsOf(
            "sessionToken" of argsOf(
                "equalTo" of token
            )
        )
    ) {
        field(NodeContainer<CartUserQuery>::edges) {
            field(NodeContainer.Node<CartUserQuery>::node) {
                field(CartUserQuery::user) {
                    field(CartUserQuery.CartUser::cart, cartField)
                }
            }
        }
    }
}).decode<SessionsQuery>().tryMap { it.sessions?.edges?.firstOrNull()?.node?.user }.map { it.cart }

@Serializable
private data class UpdateUserMutation(
    val updateUser: CartUserQuery
)

fun setCustomerCart(userId: String, cartId: String) = http(mutation {
    field(
        UpdateUserMutation::updateUser,
        "input" of argsOf(
            "id" of userId,
            "fields" of argsOf(
                "cart" of argsOf(
                    "link" of cartId
                )
            )
        )
    ) {
        field(CartUserQuery::user) {
            field(CartUserQuery.CartUser::cart, cartField)
        }
    }
}).decode<UpdateUserMutation>().tryMap { it.updateUser.user.cart }