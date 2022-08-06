package me.haymob.coffeeshop.entities

import me.haymob.multiplatformannotations._JsExport

@_JsExport
enum class FieldType {
    Email,
    Password,
    NewPassword,
    FirstName,
    LastName,
    City,
    Street,
    Postcode
}
