package me.haymob.coffeeshop.ui.customer.account

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.services.FieldsService
import me.haymob.coffeeshop.mappers.FieldMapper
import me.haymob.coffeeshop.store.Store

class AccountUIStore(
    internal val customerStore: CustomerStore,
    internal val fieldsService: FieldsService
): Store<AccountUIState, AccountUIEffect>(AccountUIState()) {
    init {
        customerStore.state.onEach {
            setState {
                if (it.isLoading) {
                    copy(isLoading = it.isLoading)
                } else {
                    copy(
                        fields = it.customer?.let(FieldMapper::fieldsFromCustomer) ?: emptyList(),
                        isLoading = it.isLoading
                    )
                }
            }
        }.launchIn(scope)
        customerStore.effect.onEach {
            when (it) {
                is CustomerEffect.Error -> setEffect(AccountUIEffect.Error(it.message))
                is CustomerEffect.Successes -> setEffect(AccountUIEffect.Successes)
            }
        }.launchIn(scope)
    }
}