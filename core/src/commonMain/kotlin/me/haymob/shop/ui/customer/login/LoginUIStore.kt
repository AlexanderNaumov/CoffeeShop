package me.haymob.shop.ui.customer.login

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.shop.domain.customer.CustomerEffect
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.domain.services.FieldsService
import me.haymob.shop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class LoginUIStore internal constructor(
    internal val customerStore: CustomerStore,
    internal val fieldsService: FieldsService
): Store<LoginUIState, LoginUIEffect>(LoginUIState()) {
    init {
        customerStore.state.onEach {
            setState { copy(isLoading = it.isLoading) }
        }.launchIn(scope)
        customerStore.effect.onEach {
            when (it) {
                is CustomerEffect.Error -> setEffect(LoginUIEffect.Error(it.message))
                is CustomerEffect.Successes -> setEffect(LoginUIEffect.Successes)
                else -> {}
            }
        }.launchIn(scope)
    }
}