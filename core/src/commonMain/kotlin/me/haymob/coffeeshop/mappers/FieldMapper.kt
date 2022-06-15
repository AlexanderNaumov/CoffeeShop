package me.haymob.coffeeshop.mappers

import me.haymob.coffeeshop.entities.Customer
import me.haymob.coffeeshop.entities.Field
import me.haymob.coffeeshop.entities.FieldType

internal object FieldMapper {
    fun fieldsFromCustomer(customer: Customer) = listOf(
        Field(FieldType.FirstName, customer.firstName),
        Field(FieldType.LastName, customer.lastName),
        Field(FieldType.Email, customer.email),
        Field(FieldType.NewPassword)
    )
}