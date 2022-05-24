package me.haymob.coffeeshop.domain.cart

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.actions.loadCart
import me.haymob.coffeeshop.domain.catalog.CatalogEffect
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.services.ShopService
import me.haymob.coffeeshop.domain.services.CartService
import me.haymob.coffeeshop.store.Store

class CartStore(
    internal val shopService: ShopService,
    internal val cartService: CartService,
    internal val catalogStore: CatalogStore
): Store<CartState, Unit>(CartState()) {
    init {
        catalogStore.effect.onEach {
            when (it) {
                CatalogEffect.DidLoad -> loadCart()
            }
        }.launchIn(scope)
    }
}