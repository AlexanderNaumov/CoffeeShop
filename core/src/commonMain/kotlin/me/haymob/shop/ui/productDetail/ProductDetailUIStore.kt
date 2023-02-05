package me.haymob.shop.ui.productDetail

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.shop.domain.cart.CartStore
import me.haymob.shop.domain.catalog.CatalogStore
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class ProductDetailUIStore internal constructor(
    catalogStore: CatalogStore,
    internal val cartStore: CartStore,
    internal val customerStore: CustomerStore,
    productId: String
): Store<ProductDetailUIState, Unit>(ProductDetailUIState()) {
    init {
        catalogStore.state.onEach {
            setState {
                copy(product = it.categories.flatMap { it.child }.flatMap { it.products }.find { it.id == productId })
            }
        }.launchIn(scope)
        customerStore.state.onEach {
            setState {
                copy(isShowWishlist = it.isLoggedIn)
            }
        }.launchIn(scope)
    }
}