package me.haymob.coffeeshop.ui.customer.account

import me.haymob.coffeeshop.entities.Field
import me.haymob.coffeeshop.store.State

data class AccountUIState(
    val fields: List<Field> = emptyList(),
    val isLoading: Boolean = false
): State