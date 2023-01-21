package me.haymob.coffeeshop.ui.customer.signup

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.services.FieldsService
import me.haymob.coffeeshop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class SignupUIStore internal constructor(
    internal val customerStore: CustomerStore,
    internal val fieldsService: FieldsService
): Store<SignupUIState, SignupUIEffect>(SignupUIState()) {
    init {
        customerStore.state.onEach {
            setState { copy(isLoading = it.isLoading) }
        }.launchIn(scope)
        customerStore.effect.onEach {
            when (it) {
                is CustomerEffect.Error -> setEffect(SignupUIEffect.Error(it.message))
                is CustomerEffect.Successes -> setEffect(SignupUIEffect.Successes)
                else -> {}
            }
        }.launchIn(scope)
    }
}