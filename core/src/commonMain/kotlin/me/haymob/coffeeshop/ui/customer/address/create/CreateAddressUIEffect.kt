package me.haymob.coffeeshop.ui.customer.address.create

import me.haymob.multiplatformannotations._JsExport

@_JsExport
sealed class CreateAddressUIEffect {
    object Successes: CreateAddressUIEffect()
    class Error(val message: String): CreateAddressUIEffect()
}