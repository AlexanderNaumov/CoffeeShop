package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.onResult

fun CustomerStore.login(email: String, password: String) {
    setState { copy(isLoading = true) }
    shopService.login(email, password).onResult { result ->
        didLoadUserViewer(result)
        val id = result.getOrNull()?.user?.objectId
        if (id != null) {
            setEffect(CustomerEffect.WasAuthorized(id))
        }
    }.launchIn(scope)
}