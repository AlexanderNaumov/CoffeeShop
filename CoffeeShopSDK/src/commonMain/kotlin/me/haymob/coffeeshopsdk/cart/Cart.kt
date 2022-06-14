package me.haymob.coffeeshopsdk.cart

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import me.haymob.coffeeshopsdk.core.*
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