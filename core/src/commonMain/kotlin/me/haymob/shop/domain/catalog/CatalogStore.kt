package me.haymob.shop.domain.catalog

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.shop.domain.catalog.actions.productSetLoading
import me.haymob.shop.domain.catalog.actions.productSetWishlist
import me.haymob.shop.domain.catalog.actions.productsQtyUpdate
import me.haymob.shop.domain.services.CatalogService
import me.haymob.shop.domain.services.SharedDataEffect
import me.haymob.shop.domain.services.SharedDataService
import me.haymob.shop.store.Store

internal class CatalogStore(
    internal val catalogService: CatalogService,
    internal val sharedDataService: SharedDataService
): Store<CatalogState, Unit>(CatalogState()) {
    init {
        sharedDataService.effect.onEach {
            when (it) {
                is SharedDataEffect.ProductSetLoading -> productSetLoading(it.product, it.loading)
                is SharedDataEffect.ProductsQtyUpdate -> productsQtyUpdate(it.products)
                is SharedDataEffect.WishlistDidLoad -> productSetWishlist(it.products)
                else -> Unit
            }
        }.launchIn(scope)
    }
}