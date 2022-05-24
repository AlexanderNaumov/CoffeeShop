package me.haymob.coffeeshop.domain.services

import me.haymob.preferences.Preferences

private const val CART_ID_KEY = "cart_id"

class CartService {

    fun setCartId(id: String) {
        Preferences.setString(CART_ID_KEY, id)
    }

    fun cartId(): String? = Preferences.getString(CART_ID_KEY)

    fun removeCartId() {
        Preferences.removeValue(CART_ID_KEY)
    }
}