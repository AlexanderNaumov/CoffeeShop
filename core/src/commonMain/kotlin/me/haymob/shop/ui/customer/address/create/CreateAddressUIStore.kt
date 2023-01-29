package me.haymob.shop.ui.customer.address.create

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.shop.domain.customer.CustomerEffect
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.domain.services.FieldsService
import me.haymob.shop.mappers.FieldMapper
import me.haymob.shop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class CreateAddressUIStore internal constructor(
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
                else -> {}
            }
        }.launchIn(scope)
    }
}