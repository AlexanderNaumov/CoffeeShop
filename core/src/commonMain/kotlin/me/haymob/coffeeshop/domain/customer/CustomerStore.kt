package me.haymob.coffeeshop.domain.customer

import me.haymob.coffeeshop.domain.services.AppStorage
import me.haymob.coffeeshop.domain.services.ShopService
import me.haymob.coffeeshop.store.Store

class CustomerStore(
    internal val shopService: ShopService,
    internal val storage: AppStorage
): Store<CustomerState, CustomerEffect>(CustomerState()) {
    init {
        val token = storage.customerToken()
        if (token != null) {
            setState { copy(isLoggedIn = true) }
            shopService.setSessionToken(token)
        }
    }
}