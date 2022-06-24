package me.haymob.coffeeshop.domain.customer

import me.haymob.coffeeshop.entities.Product

sealed class CustomerEffect {
    object Successes: CustomerEffect()
    class Error(val message: String): CustomerEffect()
    class WishlistDidLoad(val products: List<Product>): CustomerEffect()
    object WasAuthorized: CustomerEffect()
    object LeftTheGame: CustomerEffect()
}