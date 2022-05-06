package me.haymob.coffeeshop.catalog

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
        launch {
            cartStore.effect.collect {
                when (it) {
                    is CartEffect.DidLoad -> productsQtyUpdate(it.products)
                }
            }
        }
    }
}