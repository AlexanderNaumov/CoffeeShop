package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.*
import me.haymob.coffeeshop.domain.cart.CartEffect
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.flow.onResult
import me.haymob.coffeeshop.mappers.CartMapper

internal fun CartStore.updateProduct(product: Product) {
    setState { copy(isLoading = true) }
    setEffect(CartEffect.ProductSetLoading(product, true))

    val isLoggedIn = storage.customerToken() != null

    (currentState.cart?.let { cart ->
        val item = cart.items.find { it.product.id == product.id }
        when {
            item != null && product.qty > 0 -> shopService.updateItem(item.id, product.qty)
            item != null && product.qty == 0 -> shopService.removeItem(item.id)
            item == null && product.qty > 0 -> shopService.addProduct(cart.id, product.id, product.qty)
            else -> throw Exception("unknown operation")
        }
    } ?: shopService.createCart().flatMapMerge {
        if (isLoggedIn) {
            shopService.setCustomerCart(it.objectId)
        } else {
            flowOf(it)
        }
    }.onEach {
        if (!isLoggedIn) storage.setCartId(it.objectId)
    }.flatMapMerge {
        shopService.addProduct(it.objectId, product.id, product.qty)
    }).onResult { result ->
        val newCart = result.getOrNull()?.let(CartMapper::cartFromDto)
        setState {
            copy(
                cart = newCart,
                isLoading = false
            )
        }
        setEffect(CartEffect.ProductSetLoading(product, false))
        val products = newCart?.items?.map { it.product } ?: emptyList()
        setEffect(CartEffect.DidLoad(products))
    }.launchIn(scope)
}