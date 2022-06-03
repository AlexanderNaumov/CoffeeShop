package me.haymob.coffeeshop.domain.catalog

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.catalog.actions.productsQtyUpdate
import me.haymob.coffeeshop.domain.catalog.actions.productSetLoading
import me.haymob.coffeeshop.domain.events.product.ProductEmitter
import me.haymob.coffeeshop.domain.events.product.ProductEvent
import me.haymob.coffeeshop.domain.services.ShopService
import me.haymob.coffeeshop.store.Store

class CatalogStore(
    internal val shopService: ShopService,
    internal val productEmitter: ProductEmitter
): Store<CatalogState, Unit>(CatalogState()) {
    init {
        productEmitter.subscribe {
            when (it) {
                is ProductEvent.CartDidLoad -> productsQtyUpdate(it.products)
                is ProductEvent.ProductSetLoading -> productSetLoading(it.product, it.loading)
                else -> {}
            }
        }.launchIn(scope)
    }
}