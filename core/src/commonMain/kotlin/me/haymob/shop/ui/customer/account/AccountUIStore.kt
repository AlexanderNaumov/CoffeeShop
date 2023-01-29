package me.haymob.shop.ui.customer.account

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.shop.domain.customer.CustomerEffect
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.domain.services.FieldsService
import me.haymob.shop.mappers.FieldMapper
import me.haymob.shop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class AccountUIStore internal constructor(
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
                        fields = it.customer?.let(FieldMapper::accountFieldsFromCustomer) ?: emptyList(),
                        isLoading = it.isLoading,
                        isRefreshing = if (isRefreshing && it.isLoading.not()) false else isRefreshing

                    )
                }
            }
        }.launchIn(scope)
        customerStore.effect.onEach {
            when (it) {
                is CustomerEffect.Error -> setEffect(AccountUIEffect.Error(it.message))
                is CustomerEffect.Successes -> setEffect(AccountUIEffect.Successes)
                else -> {}
            }
        }.launchIn(scope)
    }
}