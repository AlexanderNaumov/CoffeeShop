package me.haymob.shop.domain.cart.actions

import kotlinx.coroutines.flow.*
import me.haymob.shop.domain.cart.CartStore
import me.haymob.shop.entities.Product
import me.haymob.shop.flow.onResult
import me.haymob.shop.mappers.CartMapper

internal fun CartStore.updateProduct(product: Product) {
    setState { copy(isLoading = true) }
    productSetLoading(product,  true)

    val isLoggedIn = storage.customerToken() != null

    (currentState.cart?.let { cart ->
        val item = cart.items.find { it.product.id == product.id }
        when {
            item != null && product.qty > 0 -> cartService.updateItem(item.id, product.qty)
            item != null && product.qty == 0 -> cartService.removeItem(item.id)
            item == null && product.qty > 0 -> cartService.addProduct(cart.id, product.id, product.qty)
            else -> throw Exception("unknown operation")
        }
    } ?: cartService.createCart().flatMapMerge {
        if (isLoggedIn) {
            cartService.setCustomerCart(it.objectId)
        } else {
            flowOf(it)
        }
    }.onEach {
        if (!isLoggedIn) storage.setCartId(it.objectId)
    }.flatMapMerge {
        cartService.addProduct(it.objectId, product.id, product.qty)
    }).onResult { result ->
        val newCart = result.getOrNull()?.let(CartMapper::cartFromDto)
        setState {
            copy(
                cart = newCart,
                isLoading = false
            )
        }
        productSetLoading(product, false)
        val products = newCart?.items?.map { it.product } ?: emptyList()
        sharedDataService.cartDidLoad(products)
    }.launchIn(scope)
}