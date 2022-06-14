package me.haymob.coffeeshop.domain.customer

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.services.AppStorage
import me.haymob.coffeeshop.domain.services.ShopService
import me.haymob.coffeeshop.store.Store

class CustomerStore(
    internal val shopService: ShopService,
    internal val storage: AppStorage
): Store<CustomerState, CustomerEffect>(CustomerState()) {
    init {
        if (storage.customerToken() != null) {
            setState { copy(isLoggedIn = true) }
        }
    }
}