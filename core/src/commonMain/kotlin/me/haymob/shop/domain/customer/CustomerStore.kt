package me.haymob.shop.domain.customer

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.shop.domain.customer.actions.loadCustomer
import me.haymob.shop.domain.customer.actions.productSetLoading
import me.haymob.shop.domain.customer.actions.productsQtyUpdate
import me.haymob.shop.domain.services.*
import me.haymob.shop.domain.services.AppStorage
import me.haymob.shop.domain.services.SessionTokenService
import me.haymob.shop.domain.services.SharedDataEffect
import me.haymob.shop.domain.services.SharedDataService
import me.haymob.shop.store.Store

internal class CustomerStore(
    internal val sessionTokenService: SessionTokenService,
    internal val customerService: CustomerService,
    internal val storage: AppStorage,
    internal val sharedDataService: SharedDataService
): Store<CustomerState, CustomerEffect>(CustomerState()) {
    init {
        val token = storage.customerToken()
        if (token != null) {
            setState { copy(isLoggedIn = true) }
            sessionTokenService.setSessionToken(token)
        }
        sharedDataService.effect.onEach {
            when (it) {
                is SharedDataEffect.ProductSetLoading -> productSetLoading(it.product, it.loading)
                is SharedDataEffect.ProductsQtyUpdate -> productsQtyUpdate(it.products)
                is SharedDataEffect.OrderSuccess -> loadCustomer()
                else -> Unit
            }
        }.launchIn(scope)
    }
}