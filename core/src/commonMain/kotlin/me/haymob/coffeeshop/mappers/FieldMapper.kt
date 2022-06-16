package me.haymob.coffeeshop.mappers

import me.haymob.coffeeshop.entities.Address
import me.haymob.coffeeshop.entities.Customer
import me.haymob.coffeeshop.entities.Field
import me.haymob.coffeeshop.entities.FieldType

internal object FieldMapper {
    fun accountFieldsFromCustomer(customer: Customer) = listOf(
        Field(FieldType.FirstName, customer.firstName),
        Field(FieldType.LastName, customer.lastName),
        Field(FieldType.Email, customer.email),
        Field(FieldType.NewPassword)
    )

    fun addressFieldFromCustomer(customer: Customer) = listOf(
        Field(FieldType.FirstName, customer.firstName),
        Field(FieldType.LastName, customer.lastName),
        Field(FieldType.City),
        Field(FieldType.Street),
        Field(FieldType.Postcode)
    )

    fun addressFieldFromAddress(address: Address) = listOf(
        Field(FieldType.FirstName, address.firstName),
        Field(FieldType.LastName, address.lastName),
        Field(FieldType.City, address.city),
        Field(FieldType.Street, address.street),
        Field(FieldType.Postcode, address.postcode)
    )
}