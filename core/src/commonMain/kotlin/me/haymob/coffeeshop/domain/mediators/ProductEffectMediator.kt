package me.haymob.coffeeshop.domain.mediators

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.cart.actions.loadCart
import me.haymob.coffeeshop.domain.catalog.CatalogEffect
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.catalog.actions.productSetLoading
import me.haymob.coffeeshop.domain.catalog.actions.productsQtyUpdate
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.customer.actions.loadCustomer
import me.haymob.coffeeshop.store.EffectMediator

class ProductEffectMediator(
    cartStore: CartStore,
    catalogStore: CatalogStore,
    customerStore: CustomerStore
): EffectMediator(cartStore, catalogStore) {
    init {
        effect.onEach {
            when (it) {
                is CartEffect.ProductSetLoading -> catalogStore.productSetLoading(it.product, it.loading)
                is CartEffect.DidLoad -> catalogStore.productsQtyUpdate(it.products)
                is CatalogEffect.DidLoad -> {
                    cartStore.loadCart()
                    customerStore.loadCustomer()
                }
            }
        }.launchIn(scope)
    }
}