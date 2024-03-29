package me.haymob.coffeeshopsdk.cart

import kotlinx.coroutines.flow.flatMapMerge
import kotlinx.coroutines.flow.map
import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.*
import me.haymob.coffeeshopsdk.entities.*
import me.haymob.coffeeshopsdk.services.ConfigService
import me.haymob.coffeeshopsdk.services.HTTPService

class CartController internal constructor(
    private val http: HTTPService,
    private val config: ConfigService
) {
    @Serializable
    private data class CartQuery(val cart: Cart): GQLObject

    @Serializable
    private data class CreateCartMutation(val createCart: CartQuery)

    fun createCart() = http.graphQL(mutation {
        field(
            CreateCartMutation::createCart,
            "input" of argsOf()
        ) {
            field(CartQuery::cart, cartField)
        }
    }).decode<CreateCartMutation>().tryMap { it.createCart.cart }

    fun cart(id: String) = http.graphQL(query {
        field(CartQuery::cart, cartField, "id" of id)
    }).decode<CartQuery>().tryMap { it.cart }

    @Serializable
    private data class DeleteCartMutation(val deleteCart: CartQuery)

    fun deleteCart(id: String) = http.graphQL(mutation {
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

    fun addProduct(cartId: String, productId: String, qty: Int) = http.graphQL(mutation {
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

    fun updateItem(itemId: String, qty: Int) = http.graphQL(mutation {
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

    fun removeItem(itemId: String) = http.graphQL(mutation {
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


    fun loadCustomerCart(token: String = config.state.sessionToken ?: "") = http.graphQL(query {
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
    private data class UserIdQuery(val user: UserId): GQLObject {
        @Serializable
        data class UserId(val objectId: String): GQLObject
    }

    @Serializable
    private data class SessionsQuery2(val sessions: NodeContainer<UserIdQuery>?)

    private fun getUserId(token: String = config.state.sessionToken ?: "") = http.graphQL(query {
        field(
            SessionsQuery2::sessions,
            "where" of argsOf(
                "sessionToken" of argsOf(
                    "equalTo" of token
                )
            )
        ) {
            field(NodeContainer<UserIdQuery>::edges) {
                field(NodeContainer.Node<UserIdQuery>::node) {
                    field(UserIdQuery::user) {
                        field(UserIdQuery.UserId::objectId)
                    }
                }
            }
        }
    }).decode<SessionsQuery2>().tryMap { it.sessions?.edges?.firstOrNull()?.node?.user?.objectId }

    @Serializable
    private data class UpdateUserMutation(
        val updateUser: CartUserQuery
    )

    private fun setUserCart(userId: String, cartId: String) = http.graphQL(mutation {
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


    fun setCustomerCart(cartId: String) = getUserId().flatMapMerge {
        setUserCart(it, cartId)
    }

    @Serializable
    private data class UpdateCartMutation(
        val updateCart: CartQuery
    )

    fun setAddressOnCart(cartId: String, addressId: String) = http.graphQL(mutation {
        field(
            UpdateCartMutation::updateCart,
            "input" of argsOf(
                "id" of cartId,
                "fields" of argsOf(
                    "address" of argsOf(
                        "link" of addressId
                    )
                )
            )
        ) {
            field(CartQuery::cart, cartField)
        }
    }).decode<UpdateCartMutation>().tryMap { it.updateCart.cart }

    @Serializable
    private data class OrderQuery(val order: Order): GQLObject {
        @Serializable
        data class Order(val objectId: String): GQLObject
    }

    @Serializable
    private data class CreateOrderMutation(
        val createOrder: OrderQuery
    )

    fun createOrder(cartId: String, paymentId: String, shippingId: String) = http.graphQL(mutation {
        field(
            CreateOrderMutation::createOrder,
            "input" of argsOf(
                "fields" of argsOf(
                    "cart" of argsOf(
                        "link" of cartId
                    ),
                    "paymentMethod" of argsOf(
                        "link" of paymentId
                    ),
                    "shippingMethod" of argsOf(
                        "link" of shippingId
                    )
                )
            )
        ) {
            field(OrderQuery::order) {
                field(OrderQuery.Order::objectId)
            }
        }
    }).decode<CreateOrderMutation>().tryMap { it.createOrder.order.objectId }

    @Serializable
    private data class UpdateOrderMutation(
        val updateOrder: OrderQuery
    )

    fun reorder(orderId: String) = http.graphQL(mutation {
        field(
            UpdateOrderMutation::updateOrder,
            "input" of argsOf(
                "id" of orderId,
                "fields" of argsOf(
                    "isReorder" of true
                )
            )
        ) {
            field(OrderQuery::order) {
                field(OrderQuery.Order::objectId)
            }
        }
    }).decode<UpdateOrderMutation>().tryMap { it.updateOrder.order.objectId }.map {}
}