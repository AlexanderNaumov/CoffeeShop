package me.haymob.coffeeshop.ui.customer.address.create

import me.haymob.coffeeshop.entities.Field
import me.haymob.coffeeshop.store.State

data class CreateAddressUIState(
    val fields: List<Field> = emptyList(),
    val isLoading: Boolean = false
): State