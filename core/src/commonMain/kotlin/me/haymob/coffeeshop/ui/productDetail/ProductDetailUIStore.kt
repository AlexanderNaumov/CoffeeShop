package me.haymob.coffeeshop.ui.productDetail

import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.flow.withUnretained
import me.haymob.coffeeshop.store.Store
import me.haymob.multiplatformannotations._JsExport

@_JsExport
class ProductDetailUIStore(
    internal val catalogStore: CatalogStore,
    internal val cartStore: CartStore,
    internal val customerStore: CustomerStore,
    productId: String
): Store<ProductDetailUIState, Unit>(ProductDetailUIState()) {
    init {
        catalogStore.state.withUnretained(this) { store, catalogState ->
            store.setState {
                copy(
                    product = catalogState.categories.flatMap { it.products }.find { it.id == productId }
                )
            }
        }.launchIn(scope)
        customerStore.state.withUnretained(this) { store, customerState ->
            store.setState {
                copy(isShowWishlist = customerState.isLoggedIn)
            }
        }.launchIn(scope)
    }
}