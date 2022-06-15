package me.haymob.coffeeshop.domain.cart

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.actions.productSetLoading
import me.haymob.coffeeshop.domain.services.ShopService
import me.haymob.coffeeshop.domain.services.AppStorage
import me.haymob.coffeeshop.store.Store

class CartStore(
    internal val shopService: ShopService,
    internal val storage: AppStorage
): Store<CartState, CartEffect>(CartState()) {
    init {
        effect.onEach {  it ->
            when (it) {
                is CartEffect.ProductSetLoading -> productSetLoading(it.product, it.loading)
                else -> {}
            }
        }.launchIn(scope)
    }
}
