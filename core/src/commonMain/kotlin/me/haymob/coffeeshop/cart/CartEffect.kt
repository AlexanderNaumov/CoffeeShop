package me.haymob.coffeeshop.cart

import me.haymob.coffeeshop.entities.Product

sealed class CartEffect {
    class DidLoad(val products: List<Product>): CartEffect()
    class Edit(val products: List<Product>): CartEffect()
}