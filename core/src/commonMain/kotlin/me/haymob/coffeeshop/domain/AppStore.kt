package me.haymob.coffeeshop.domain

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.*
import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.cart.actions.*
import me.haymob.coffeeshop.domain.cart.actions.loadCart
import me.haymob.coffeeshop.domain.catalog.CatalogEffect
import me.haymob.coffeeshop.domain.catalog.CatalogState
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.catalog.actions.loadCatalog
import me.haymob.coffeeshop.domain.catalog.actions.productSetLoading
import me.haymob.coffeeshop.domain.catalog.actions.productsQtyUpdate
import me.haymob.coffeeshop.domain.catalog.actions.productSetWishlist
import me.haymob.coffeeshop.domain.customer.CustomerEffect
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.customer.actions.loadCustomer
import me.haymob.coffeeshop.domain.customer.actions.productSetLoading
import me.haymob.coffeeshop.domain.customer.actions.productsQtyUpdate
import me.haymob.coffeeshop.entities.Product
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class AppStore(
    internal val cartStore: CartStore,
    internal val catalogStore: CatalogStore,
    internal val customerStore: CustomerStore
) {

    private val scope = CoroutineScope(Dispatchers.Unconfined + Job())

    fun loggedIn() = customerStore.currentState.isLoggedIn

    init {
        cartStore.effect.onEach {
            when (it) {
                is CartEffect.ProductSetLoading -> {
                    catalogStore.productSetLoading(it.product, it.loading)
                    customerStore.productSetLoading(it.product, it.loading)
                }
                is CartEffect.OrderSuccess -> {
                    cartStore.loadCustomerCart()
                    customerStore.loadCustomer()
                }
                else -> {}
            }
        }.launchIn(scope)

        customerStore.effect.onEach {
            when (it) {
                is CustomerEffect.LoggedIn -> cartStore.setCustomerCart()
                is CustomerEffect.LoggedOut -> cartStore.removeCart()
                else -> {}
            }
        }.launchIn(scope)

        combine(
            catalogStore.effect.mapNotNull { it as? CatalogEffect.DidLoad },
            cartStore.effect.mapNotNull { it as? CartEffect.DidLoad },
            customerStore.effect.mapNotNull { it as? CustomerEffect.DidLoadWishlist }
        ) { _, cart, wishlist ->
            catalogStore.productsQtyUpdate(cart.products)
            customerStore.productsQtyUpdate(cart.products)
            catalogStore.productSetWishlist(wishlist.products)
        }.launchIn(scope)
    }

    fun load() {
        catalogStore.loadCatalog()
        if (customerStore.currentState.isLoggedIn) {
            cartStore.loadCustomerCart()
        } else {
            cartStore.loadCart()
        }
        customerStore.loadCustomer()
    }
}