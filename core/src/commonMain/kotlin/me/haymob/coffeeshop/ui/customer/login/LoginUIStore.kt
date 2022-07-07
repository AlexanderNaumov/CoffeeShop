package me.haymob.coffeeshop.ui.customer.login

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.services.FieldsService
import me.haymob.coffeeshop.store.Store

class LoginUIStore(
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
            }
        }.launchIn(scope)
    }
}