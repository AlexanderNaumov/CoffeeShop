package me.haymob.coffeeshop.domain.customer

internal sealed class CustomerEffect {
    object Successes: CustomerEffect()
    class Error(val message: String): CustomerEffect()
}