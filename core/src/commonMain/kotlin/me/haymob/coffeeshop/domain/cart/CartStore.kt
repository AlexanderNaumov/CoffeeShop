package me.haymob.coffeeshop.domain.cart

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.actions.productSetLoading
import me.haymob.coffeeshop.domain.catalog.actions.productSetLoading
import me.haymob.coffeeshop.domain.services.ShopService
import me.haymob.coffeeshop.domain.services.CartService
import me.haymob.coffeeshop.store.Store

class CartStore(
    internal val shopService: ShopService,
    internal val cartService: CartService
): Store<CartState, CartEffect>(CartState()) {
    init {
        effect.onEach {
            when (it) {
                is CartEffect.ProductSetLoading -> productSetLoading(it.product, it.loading)
                else -> {}
            }
        }.launchIn(scope)
    }
}
