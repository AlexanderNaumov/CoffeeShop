package me.haymob.coffeeshop.ui.customer.address.list

import me.haymob.coffeeshop.store.State
import me.haymob.coffeeshop.entities.Address

data class AddressListUIState(
    val addresses: List<Address> = emptyList(),
    val isLoading: Boolean = false
): State