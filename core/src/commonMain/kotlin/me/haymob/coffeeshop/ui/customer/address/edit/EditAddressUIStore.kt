package me.haymob.coffeeshop.ui.customer.address.edit

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.services.FieldsService
import me.haymob.coffeeshop.entities.Address
import me.haymob.coffeeshop.mappers.FieldMapper
import me.haymob.coffeeshop.store.Store

class EditAddressUIStore(
    internal val customerStore: CustomerStore,
    internal val fieldsService: FieldsService,
    internal val address: Address
): Store<EditAddressUIState, EditAddressUIEffect>(EditAddressUIState()) {
    init {
        customerStore.state.onEach {
            setState {
                if (it.isLoading) {
                    copy(isLoading = it.isLoading)
                } else {
                    copy(
                        fields = FieldMapper.addressFieldFromAddress(address),
                        isLoading = it.isLoading
                    )
                }
            }
        }.launchIn(scope)
        customerStore.effect.onEach {
            when (it) {
                is CustomerEffect.Error -> setEffect(EditAddressUIEffect.Error(it.message))
                is CustomerEffect.Successes -> setEffect(EditAddressUIEffect.Successes)
            }
        }.launchIn(scope)
    }
}