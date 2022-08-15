package me.haymob.coffeeshop.ui.customer.address.create

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.services.FieldsService
import me.haymob.coffeeshop.flow.withUnretained
import me.haymob.coffeeshop.mappers.FieldMapper
import me.haymob.coffeeshop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class CreateAddressUIStore(
    internal val customerStore: CustomerStore,
    internal val fieldsService: FieldsService
): Store<CreateAddressUIState, CreateAddressUIEffect>(CreateAddressUIState()) {
    init {
        customerStore.state.withUnretained(this) { store, customerState ->
            store.setState {
                if (customerState.isLoading) {
                    copy(isLoading = customerState.isLoading)
                } else {
                    copy(
                        fields = customerState.customer?.let(FieldMapper::addressFieldFromCustomer) ?: emptyList(),
                        isLoading = customerState.isLoading
                    )
                }
            }
        }.launchIn(scope)
        customerStore.effect.withUnretained(this) { store, customerEffect ->
            when (customerEffect) {
                is CustomerEffect.Error -> store.setEffect(CreateAddressUIEffect.Error(customerEffect.message))
                is CustomerEffect.Successes -> store.setEffect(CreateAddressUIEffect.Successes)
                else -> {}
            }
        }.launchIn(scope)
    }
}