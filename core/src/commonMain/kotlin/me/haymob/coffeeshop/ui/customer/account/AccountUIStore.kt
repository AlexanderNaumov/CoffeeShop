package me.haymob.coffeeshop.ui.customer.account

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.services.FieldsService
import me.haymob.coffeeshop.flow.withUnretained
import me.haymob.coffeeshop.mappers.FieldMapper
import me.haymob.coffeeshop.store.Store
import me.haymob.multiplatformannotations._JsExport
import me.haymob.weakref.weak

@_JsExport
class AccountUIStore(
    internal val customerStore: CustomerStore,
    internal val fieldsService: FieldsService
): Store<AccountUIState, AccountUIEffect>(AccountUIState()) {
    init {
        customerStore.state.withUnretained(this) { store, customerState ->
            store.setState {
                if (customerState.isLoading) {
                    copy(isLoading = customerState.isLoading)
                } else {
                    copy(
                        fields = customerState.customer?.let(FieldMapper::accountFieldsFromCustomer) ?: emptyList(),
                        isLoading = customerState.isLoading,
                        isRefreshing = if (isRefreshing && customerState.isLoading.not()) false else isRefreshing

                    )
                }
            }
        }.launchIn(scope)
        customerStore.effect.withUnretained(this) { store, customerEffect ->
            when (customerEffect) {
                is CustomerEffect.Error -> store.setEffect(AccountUIEffect.Error(customerEffect.message))
                is CustomerEffect.Successes -> store.setEffect(AccountUIEffect.Successes)
                else -> {}
            }
        }.launchIn(scope)
    }
}