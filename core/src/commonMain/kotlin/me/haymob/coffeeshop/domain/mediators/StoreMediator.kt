package me.haymob.coffeeshop.domain.mediators

import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.cart.actions.*
import me.haymob.coffeeshop.domain.cart.actions.loadCart
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.catalog.actions.productSetLoading
import me.haymob.coffeeshop.domain.catalog.actions.productsQtyUpdate
import me.haymob.coffeeshop.domain.catalog.actions.productSetWishlist
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.domain.customer.actions.loadCustomer
import me.haymob.coffeeshop.domain.customer.actions.productSetLoading
import me.haymob.coffeeshop.domain.customer.actions.productsQtyUpdate
import me.haymob.coffeeshop.entities.Product
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class StoreMediator: KoinComponent {
    private val cartStore: CartStore by inject()
    private val catalogStore: CatalogStore by inject()
    private val customerStore: CustomerStore by inject()

    fun cartProductSetLoading(product: Product, loading: Boolean) {
        cartStore.productSetLoading(product, loading)
        catalogStore.productSetLoading(product, loading)
        customerStore.productSetLoading(product, loading)
    }

    fun cartDidLoad(products: List<Product>) {
        catalogStore.productsQtyUpdate(products)
        customerStore.productsQtyUpdate(products)
    }

    fun orderSuccess() {
        cartStore.loadCustomerCart()
        customerStore.loadCustomer()
    }

    fun catalogDidLoad() {
        if (customerStore.currentState.isLoggedIn) {
            cartStore.loadCustomerCart()
            customerStore.loadCustomer()
        } else {
            cartStore.loadCart()
        }
    }

    fun wishlistDidLoad(products: List<Product>) {
        catalogStore.productSetWishlist(products)
        cartStore.reloadEffect()
    }

    fun customerLoggedIn() {
        cartStore.setCustomerCart()
    }

    fun customerLoggedOut() {
        wishlistDidLoad(emptyList())
        cartStore.removeCart()
    }
}