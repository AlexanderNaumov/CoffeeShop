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
import me.haymob.coffeeshopsdk.customer.signup

class ShopService {
    fun categories() = sdkCategories()
    fun products(categoryIds: List<String>) = sdkProducts(categoryIds)
    fun createCart() = sdkCreateCart()
    fun addProduct(cartId: String, productId: String, qty: Int) = sdkAddProduct(cartId, productId, qty)
    fun updateItem(itemId: String, qty: Int) = sdkUpdateItem(itemId, qty)
    fun removeItem(itemId: String) = sdkRemoveItem(itemId)
    fun loadCart(id: String) = sdkCart(id)
    fun deleteCart(id: String) = sdkDeleteCart(id)
    fun login(email: String, password: String) = sdkLogin(email, password)
    fun register(
        firstName: String,
        secondName: String,
        email: String,
        password: String
    ) = signup(firstName, secondName, email, password)
}