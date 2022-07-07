package me.haymob.coffeeshop.ui.customer.address.create

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.services.FieldsService
import me.haymob.coffeeshop.mappers.FieldMapper
import me.haymob.coffeeshop.store.Store

class CreateAddressUIStore(
    internal val customerStore: CustomerStore,
    internal val fieldsService: FieldsService
): Store<CreateAddressUIState, CreateAddressUIEffect>(CreateAddressUIState()) {
    init {
        customerStore.state.onEach {
            setState {
                if (it.isLoading) {
                    copy(isLoading = it.isLoading)
                } else {
                    copy(
                        fields = it.customer?.let(FieldMapper::addressFieldFromCustomer) ?: emptyList(),
                        isLoading = it.isLoading
                    )
                }
            }
        }.launchIn(scope)
        customerStore.effect.onEach {
            when (it) {
                is CustomerEffect.Error -> setEffect(CreateAddressUIEffect.Error(it.message))
                is CustomerEffect.Successes -> setEffect(CreateAddressUIEffect.Successes)
            }
        }.launchIn(scope)
    }
}