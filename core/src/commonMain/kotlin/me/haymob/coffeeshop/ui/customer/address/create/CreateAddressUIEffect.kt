package me.haymob.coffeeshop.ui.customer.address.create

sealed class CreateAddressUIEffect {
    object Successes: CreateAddressUIEffect()
    class Error(val message: String): CreateAddressUIEffect()
}