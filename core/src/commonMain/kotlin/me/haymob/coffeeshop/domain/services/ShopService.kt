package me.haymob.coffeeshop.domain.services

import me.haymob.coffeeshopsdk.catalog.categories as sdkCategories
import me.haymob.coffeeshopsdk.catalog.products as sdkProducts
import me.haymob.coffeeshopsdk.cart.createCart as sdkCreateCart
import me.haymob.coffeeshopsdk.cart.addProduct as sdkAddProduct
import me.haymob.coffeeshopsdk.cart.updateItem as sdkUpdateItem
import me.haymob.coffeeshopsdk.cart.removeItem as sdkRemoveItem
import me.haymob.coffeeshopsdk.cart.cart as sdkCart
import me.haymob.coffeeshopsdk.cart.deleteCart as sdkDeleteCart
import me.haymob.coffeeshopsdk.customer.login as sdkLogin
import me.haymob.coffeeshopsdk.customer.logout as sdkLogout
import me.haymob.coffeeshopsdk.customer.signup as sdkSignup
import me.haymob.coffeeshopsdk.customer.user as sdkUser
import me.haymob.coffeeshopsdk.customer.updateUser as sdkUpdateUser
import me.haymob.coffeeshopsdk.customer.createAddress as sdkCreateAddress
import me.haymob.coffeeshopsdk.customer.updateAddress as sdkUpdateAddress
import me.haymob.coffeeshopsdk.customer.removeAddress as sdkRemoveAddress
import me.haymob.coffeeshopsdk.setSessionToken as sdkSetSessionToken
import me.haymob.coffeeshopsdk.removeSessionToken as sdkRemoveSessionToken


class ShopService {
    fun categories() = sdkCategories()
    fun products(categoryIds: List<String>) = sdkProducts(categoryIds)
    fun createCart() = sdkCreateCart()
    fun addProduct(cartId: String, productId: String, qty: Int) = sdkAddProduct(cartId, productId, qty)
    fun updateItem(itemId: String, qty: Int) = sdkUpdateItem(itemId, qty)
    fun removeItem(itemId: String) = sdkRemoveItem(itemId)
    fun loadCart(id: String) = sdkCart(id)
    fun deleteCart(id: String) = sdkDeleteCart(id)
    fun setSessionToken(token: String) = sdkSetSessionToken(token)
    fun removeSessionToken() = sdkRemoveSessionToken()
    fun login(email: String, password: String) = sdkLogin(email, password)
    fun logout() = sdkLogout()
    fun signup(
        firstName: String,
        secondName: String,
        email: String,
        password: String
    ) = sdkSignup(firstName, secondName, email, password)
    fun user() = sdkUser()
    fun updateUser(
        id: String,
        firstName: String,
        lastName: String,
        email: String,
        password: String?
    ) = sdkUpdateUser(id, firstName, lastName, email, password)
    fun createAddress(
        userId: String,
        firstName: String,
        lastName: String,
        city: String,
        street: String,
        postcode: String
    ) = sdkCreateAddress(userId, firstName, lastName, city, street, postcode)

    fun updateAddress(
        addressId: String,
        firstName: String,
        lastName: String,
        city: String,
        street: String,
        postcode: String
    ) = sdkUpdateAddress(addressId, firstName, lastName, city, street, postcode)

    fun removeAddress(addressId: String) = sdkRemoveAddress(addressId)
}