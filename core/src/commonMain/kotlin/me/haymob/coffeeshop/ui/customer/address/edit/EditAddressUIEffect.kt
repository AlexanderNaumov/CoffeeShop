package me.haymob.coffeeshop.ui.customer.address.edit

sealed class EditAddressUIEffect {
    object Successes: EditAddressUIEffect()
    class Error(val message: String): EditAddressUIEffect()
}