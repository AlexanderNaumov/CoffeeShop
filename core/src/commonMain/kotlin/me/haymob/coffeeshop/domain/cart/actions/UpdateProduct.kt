package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.*
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.catalog.actions.productLoadingUpdate
import me.haymob.coffeeshop.domain.catalog.actions.productsQtyUpdate
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.mappers.CartMapper

internal fun CartStore.updateProduct(product: Product) {
    setState { copy(isLoading = true) }
    catalogStore.productLoadingUpdate(product, true)

    (currentState.cart?.let { cart ->
        val item = cart.items.find { it.product.id == product.id }
        when {
            item != null && product.qty > 0 -> shopService.updateItem(item.id, product.qty)
            item != null && product.qty == 0 -> shopService.removeItem(item.id)
            item == null && product.qty > 0 -> shopService.addProduct(cart.id, product.id, product.qty)
            else -> throw Exception("unknown operation")
        }
    } ?: shopService.createCart().onEach {
        cartService.setCartId(it.objectId)
    }.flatMapMerge {
        shopService.addProduct(it.objectId, product.id, product.qty)
    }).catch {
        setState {
            copy(
                cart = null,
                isLoading = false
            )
        }
        catalogStore.productLoadingUpdate(product, false)
        catalogStore.productsQtyUpdate(emptyList())
    }.onEach { cart ->
        val newCart = CartMapper.cartFromDto(cart)
        setState {
            copy(
                cart = newCart,
                isLoading = false
            )
        }

        catalogStore.productLoadingUpdate(product, false)
        catalogStore.productsQtyUpdate(newCart.items.map { it.product })
    }.launchIn(scope)
}