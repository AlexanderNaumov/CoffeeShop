package me.haymob.coffeeshop.domain.mediators

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.cart.actions.*
import me.haymob.coffeeshop.domain.cart.actions.loadCart
import me.haymob.coffeeshop.domain.catalog.CatalogEffect
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.catalog.actions.productSetLoading
import me.haymob.coffeeshop.domain.catalog.actions.productSetWishlist
import me.haymob.coffeeshop.domain.catalog.actions.productsQtyUpdate
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.customer.actions.loadCustomer
import me.haymob.coffeeshop.domain.customer.actions.productSetLoading
import me.haymob.coffeeshop.domain.customer.actions.productsQtyUpdate
import me.haymob.coffeeshop.store.EffectMediator

class ProductEffectMediator(
    cartStore: CartStore,
    catalogStore: CatalogStore,
    customerStore: CustomerStore
): EffectMediator(cartStore, catalogStore, customerStore) {
    init {
        effect.onEach {
            when (it) {
                is CartEffect.ProductSetLoading -> {
                    catalogStore.productSetLoading(it.product, it.loading)
                    customerStore.productSetLoading(it.product, it.loading)
                }
                is CartEffect.DidLoad -> {
                    catalogStore.productsQtyUpdate(it.products)
                    customerStore.productsQtyUpdate(it.products)
                }
                is CartEffect.OrderSuccess -> {
                    cartStore.loadCustomerCart()
                    customerStore.loadCustomer()
                }
                is CatalogEffect.DidLoad -> {
                    if (customerStore.currentState.isLoggedIn) {
                        cartStore.loadCustomerCart()
                        customerStore.loadCustomer()
                    } else {
                        cartStore.loadCart()
                    }
                }
                is CustomerEffect.WishlistDidLoad -> {
                    catalogStore.productSetWishlist(it.products)
                    cartStore.reloadEffect()
                }
                is CustomerEffect.WasAuthorized -> cartStore.setCustomerCart()
                is CustomerEffect.LeftTheGame -> cartStore.removeCart()
            }
        }.launchIn(scope)
    }
}