package me.haymob.coffeeshop.domain.customer

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.customer.actions.loadCustomer
import me.haymob.coffeeshop.domain.mediators.StoreMediator
import me.haymob.coffeeshop.domain.services.AppStorage
import me.haymob.coffeeshop.domain.services.ShopService
import me.haymob.coffeeshop.store.Store

class CustomerStore(
    internal val shopService: ShopService,
    internal val storage: AppStorage,
    internal val mediator: StoreMediator
): Store<CustomerState, CustomerEffect>(CustomerState()) {
    init {
        val token = storage.customerToken()
        if (token != null) {
            setState { copy(isLoggedIn = true) }
            shopService.setSessionToken(token)
        }
    }
}