package me.haymob.coffeeshop.domain.customer

import me.haymob.coffeeshop.entities.Product

sealed class CustomerEffect {
    object LoggedIn: CustomerEffect()
    object LoggedOut: CustomerEffect()
    class DidLoadWishlist(val products: List<Product>): CustomerEffect()
    object Successes: CustomerEffect()
    class Error(val message: String): CustomerEffect()
}