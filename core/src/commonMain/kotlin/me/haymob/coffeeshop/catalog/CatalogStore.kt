package me.haymob.coffeeshop.catalog

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.cart.CartEffect
import me.haymob.coffeeshop.cart.CartStore
import me.haymob.coffeeshop.catalog.actions.productsQtyUpdate
import me.haymob.coffeeshop.services.ShopService
import me.haymob.coffeeshop.store.Store

class CatalogStore(
    internal val shopService: ShopService,
    internal val cartStore: CartStore
): Store<CatalogState, Unit>(CatalogState()) {
    init {
        cartStore.effect.onEach {
            when (it) {
                is CartEffect.DidLoad -> productsQtyUpdate(it.products)
                else -> {}
            }
        }.launchIn(scope)
    }
}