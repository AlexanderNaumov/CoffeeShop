package me.haymob.shop.ui.customer.address.edit

import me.haymob.multiplatformannotations._JsExport

@_JsExport
sealed class EditAddressUIEffect {
    object Successes: EditAddressUIEffect()
    class Error(val message: String): EditAddressUIEffect()
}