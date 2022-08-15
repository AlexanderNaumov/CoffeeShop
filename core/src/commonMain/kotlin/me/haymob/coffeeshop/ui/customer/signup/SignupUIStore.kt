package me.haymob.coffeeshop.ui.customer.signup

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.services.FieldsService
import me.haymob.coffeeshop.flow.withUnretained
import me.haymob.coffeeshop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class SignupUIStore(
    internal val customerStore: CustomerStore,
    internal val fieldsService: FieldsService
): Store<SignupUIState, SignupUIEffect>(SignupUIState()) {
    init {
        customerStore.state.withUnretained(this) { store, customerState ->
            store.setState { copy(isLoading = customerState.isLoading) }
        }.launchIn(scope)
        customerStore.effect.withUnretained(this) { store, customerEffect ->
            when (customerEffect) {
                is CustomerEffect.Error -> store.setEffect(SignupUIEffect.Error(customerEffect.message))
                is CustomerEffect.Successes -> store.setEffect(SignupUIEffect.Successes)
                else -> {}
            }
        }.launchIn(scope)
    }
}