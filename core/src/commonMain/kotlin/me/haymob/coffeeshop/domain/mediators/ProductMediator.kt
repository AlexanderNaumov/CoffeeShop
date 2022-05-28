package me.haymob.coffeeshop.domain.mediators

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.cart.actions.loadCart
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.catalog.actions.productSetLoading
import me.haymob.coffeeshop.domain.catalog.actions.productsQtyUpdate

class ProductMediator(
    internal val cartStore: CartStore,
    internal val catalogStore: CatalogStore
) {
    init {
        catalogStore.effect.onEach {
            cartStore.loadCart()
        }.launchIn(catalogStore.scope)

        cartStore.effect.onEach {
            when (it) {
                is CartEffect.DidLoad -> catalogStore.productsQtyUpdate(it.products)
                is CartEffect.ProductSetLoading -> catalogStore.productSetLoading(it.product, it.loading)
            }
        }.launchIn(cartStore.scope)
    }
}