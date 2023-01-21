package me.haymob.coffeeshop.domain.services

import me.haymob.coffeeshopsdk.customer.CustomerController

internal class CustomerService(
    private val customerController: CustomerController
) {
    fun login(email: String, password: String) = customerController.login(email, password)
    fun logout() = customerController.logout()
    fun signup(
        firstName: String,
        secondName: String,
        email: String,
        password: String
    ) = customerController.signup(firstName, secondName, email, password)
    fun user() = customerController.user()
    fun updateUser(
        id: String,
        firstName: String,
        lastName: String,
        email: String,
        password: String?
    ) = customerController.updateUser(id, firstName, lastName, email, password)
    fun createAddress(
        userId: String,
        firstName: String,
        lastName: String,
        city: String,
        street: String,
        postcode: String
    ) = customerController.createAddress(userId, firstName, lastName, city, street, postcode)
    fun updateAddress(
        addressId: String,
        firstName: String,
        lastName: String,
        city: String,
        street: String,
        postcode: String
    ) = customerController.updateAddress(addressId, firstName, lastName, city, street, postcode)
    fun removeAddress(addressId: String) = customerController.removeAddress(addressId)
    fun addProductToWishlist(userId: String, productId: String) = customerController.addProductToWishlist(userId, productId)
    fun removeProductFromWishlist(userId: String, productId: String) = customerController.removeProductFromWishlist(userId, productId)
}