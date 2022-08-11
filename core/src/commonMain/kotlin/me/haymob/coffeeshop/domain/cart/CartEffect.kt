package me.haymob.coffeeshop.domain.cart

import me.haymob.coffeeshop.entities.Product

sealed class CartEffect {
    class Error(val message: String): CartEffect()
    class ProductSetLoading(val product: Product, val loading: Boolean): CartEffect()
    class DidLoad(val products: List<Product>): CartEffect()
    class OrderSuccess(val id: String): CartEffect()
}