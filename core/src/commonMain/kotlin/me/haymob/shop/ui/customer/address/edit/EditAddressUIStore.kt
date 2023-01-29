package me.haymob.shop.ui.customer.address.edit

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.shop.domain.customer.CustomerEffect
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.domain.services.FieldsService
import me.haymob.shop.mappers.FieldMapper
import me.haymob.shop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class EditAddressUIStore internal constructor(
    internal val customerStore: CustomerStore,
    internal val fieldsService: FieldsService,
    internal val addressId: String
): Store<EditAddressUIState, EditAddressUIEffect>(EditAddressUIState()) {
    init {
        customerStore.state.onEach {
            setState {
                if (it.isLoading) {
                    copy(isLoading = it.isLoading)
                } else {
                    val fields = it.customer?.addresses?.find { address -> address.id == addressId  }?.let(FieldMapper::addressFieldFromAddress) ?: emptyList()
                    copy(
                        fields = fields,
                        isLoading = it.isLoading
                    )
                }
            }
        }.launchIn(scope)
        customerStore.effect.onEach {
            when (it) {
                is CustomerEffect.Error -> setEffect(EditAddressUIEffect.Error(it.message))
                is CustomerEffect.Successes -> setEffect(EditAddressUIEffect.Successes)
                else -> {}
            }
        }.launchIn(scope)
    }
}