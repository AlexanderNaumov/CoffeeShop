package me.haymob.coffeeshop.domain.services

import me.haymob.coffeeshopsdk.cart.CartController

internal class CartService(
    private val cartController: CartController
) {
    fun createCart() = cartController.createCart()
    fun addProduct(cartId: String, productId: String, qty: Int) = cartController.addProduct(cartId, productId, qty)
    fun updateItem(itemId: String, qty: Int) = cartController.updateItem(itemId, qty)
    fun removeItem(itemId: String) = cartController.removeItem(itemId)
    fun loadCart(id: String) = cartController.cart(id)
    fun deleteCart(id: String) = cartController.deleteCart(id)
    fun loadCustomerCart() = cartController.loadCustomerCart()
    fun setCustomerCart(cartId: String) = cartController.setCustomerCart(cartId)
    fun setAddressOnCart(cartId: String, addressId: String) = cartController.setAddressOnCart(cartId, addressId)
    fun createOrder(cartId: String, paymentId: String, shippingId: String) = cartController.createOrder(cartId, paymentId, shippingId)
    fun reorder(orderId: String) = cartController.reorder(orderId)
}