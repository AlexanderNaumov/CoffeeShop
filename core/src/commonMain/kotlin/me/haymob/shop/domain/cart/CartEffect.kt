package me.haymob.shop.domain.cart

internal sealed class CartEffect {
    class Error(val message: String): CartEffect()
    class OrderSuccess(val id: String): CartEffect()
}