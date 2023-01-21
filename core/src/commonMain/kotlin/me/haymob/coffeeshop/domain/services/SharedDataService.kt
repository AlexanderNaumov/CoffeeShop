package me.haymob.coffeeshop.domain.services

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch
import me.haymob.coffeeshop.entities.Product

internal sealed class SharedDataEffect {
    class ProductSetLoading(val product: Product, val loading: Boolean): SharedDataEffect()
    class ProductsQtyUpdate(val products: List<Product>): SharedDataEffect()
    class WishlistDidLoad(val products: List<Product>): SharedDataEffect()
    class CartDidLoad(val products: List<Product>): SharedDataEffect()
    object CatalogDidLoad: SharedDataEffect()
    class CustomerAuth(val login: Boolean): SharedDataEffect()
    object OrderSuccess: SharedDataEffect()
}


internal class SharedDataService {

    private val scope = CoroutineScope(Dispatchers.Default + Job())

    private val _effect = MutableSharedFlow<SharedDataEffect>()
    val effect = _effect.asSharedFlow()

    init {
        scope.launch {
            combine(
                _effect.mapNotNull { it as? SharedDataEffect.CatalogDidLoad },
                _effect.mapNotNull { it as? SharedDataEffect.CartDidLoad },
                _effect.mapNotNull { it as? SharedDataEffect.WishlistDidLoad }
            ) { _, cart, _ ->
                SharedDataEffect.ProductsQtyUpdate(cart.products)
            }.collect(_effect)
        }
    }

    fun productSetLoading(product: Product, loading: Boolean) {
        scope.launch {
            _effect.emit(SharedDataEffect.ProductSetLoading(product, loading))
        }
    }

    fun customerAuth(login: Boolean) {
        scope.launch {
            _effect.emit(SharedDataEffect.CustomerAuth(login))
        }
    }

    fun orderSuccess() {
        scope.launch {
            _effect.emit(SharedDataEffect.OrderSuccess)
        }
    }

    fun wishlistDidLoad(products: List<Product>) {
        scope.launch {
            _effect.emit(SharedDataEffect.WishlistDidLoad(products))
        }
    }

    fun cartDidLoad(products: List<Product>) {
        scope.launch {
            _effect.emit(SharedDataEffect.CartDidLoad(products))
        }
    }

    fun catalogDidLoad() {
        scope.launch {
            _effect.emit(SharedDataEffect.CatalogDidLoad)
        }
    }

}