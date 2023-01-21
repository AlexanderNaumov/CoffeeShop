package me.haymob.coffeeshop.domain.cart

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.actions.removeCart
import me.haymob.coffeeshop.domain.cart.actions.setCustomerCart
import me.haymob.coffeeshop.domain.services.*
import me.haymob.coffeeshop.domain.services.AppStorage
import me.haymob.coffeeshop.domain.services.SDKService
import me.haymob.coffeeshop.domain.services.SharedDataEffect
import me.haymob.coffeeshop.domain.services.SharedDataService
import me.haymob.coffeeshop.store.Store

internal class CartStore(
    internal val cartService: CartService,
    internal val storage: AppStorage,
    internal val sharedDataService: SharedDataService
): Store<CartState, CartEffect>(CartState()) {
    init {
        sharedDataService.effect.onEach {
            when (it) {
                is SharedDataEffect.CustomerAuth -> if (it.login) {
                    setCustomerCart()
                } else {
                    removeCart()
                }
                else -> Unit
            }
        }.launchIn(scope)
    }
}
