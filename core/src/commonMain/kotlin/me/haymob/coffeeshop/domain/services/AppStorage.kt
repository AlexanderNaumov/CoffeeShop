package me.haymob.coffeeshop.domain.services

import me.haymob.preferences.Preferences

private const val CART_ID_KEY = "cart_id"
private const val CUSTOMER_TOKEN_KEY = "customer_token"

internal class AppStorage {

    fun setCartId(id: String) {
        Preferences.setString(CART_ID_KEY, id)
    }

    fun cartId() = Preferences.getString(CART_ID_KEY)

    fun removeCartId() {
        Preferences.removeValue(CART_ID_KEY)
    }

    fun setCustomerToken(token: String) {
        Preferences.setString(CUSTOMER_TOKEN_KEY, token)
    }

    fun customerToken() = Preferences.getString(CUSTOMER_TOKEN_KEY)

    fun removeCustomerToken() {
        Preferences.removeValue(CUSTOMER_TOKEN_KEY)
    }

}
