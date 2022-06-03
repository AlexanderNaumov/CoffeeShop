package me.haymob.coffeeshop.domain.cart

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.cart.actions.loadCart
import me.haymob.coffeeshop.domain.cart.actions.productSetLoading
import me.haymob.coffeeshop.domain.events.product.ProductEmitter
import me.haymob.coffeeshop.domain.events.product.ProductEvent
import me.haymob.coffeeshop.domain.services.ShopService
import me.haymob.coffeeshop.domain.services.CartService
import me.haymob.coffeeshop.store.Store

class CartStore(
    internal val shopService: ShopService,
    internal val cartService: CartService,
    internal val productEmitter: ProductEmitter
): Store<CartState, Unit>(CartState()) {
    init {
        productEmitter.subscribe {
            when (it) {
                is ProductEvent.ProductSetLoading -> productSetLoading(it.product, it.loading)
                is ProductEvent.CatalogDidLoad -> loadCart()
                else -> {}
            }
        }.launchIn(scope)
    }
}
