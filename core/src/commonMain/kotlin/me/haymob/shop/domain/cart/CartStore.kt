package me.haymob.shop.domain.cart

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.shop.domain.cart.actions.removeCart
import me.haymob.shop.domain.cart.actions.setCustomerCart
import me.haymob.shop.domain.services.*
import me.haymob.shop.domain.services.AppStorage
import me.haymob.shop.domain.services.SharedDataEffect
import me.haymob.shop.domain.services.SharedDataService
import me.haymob.shop.store.Store

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
