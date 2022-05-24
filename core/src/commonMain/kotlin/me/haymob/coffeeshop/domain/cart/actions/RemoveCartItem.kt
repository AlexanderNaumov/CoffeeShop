package me.haymob.coffeeshop.domain.cart.actions

import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.domain.catalog.actions.productLoadingUpdate
import me.haymob.coffeeshop.domain.catalog.actions.productsQtyUpdate
import me.haymob.coffeeshop.entities.Cart
import me.haymob.coffeeshop.mappers.CartMapper

internal fun CartStore.removeCartItem(item: Cart.Item) {
    setState {
        copy(isLoading = true)
    }

    catalogStore.productLoadingUpdate(item.product, true)

    shopService.removeItem(item.id).catch {
        setState {
            copy(isLoading = false)
        }

        catalogStore.productLoadingUpdate(item.product, false)
        catalogStore.productsQtyUpdate(emptyList())
    }.onEach { cart ->
        val newCart = CartMapper.cartFromDto(cart)
        setState {
            copy(
                cart = newCart,
                isLoading = false
            )
        }

        catalogStore.productLoadingUpdate(item.product, false)
        catalogStore.productsQtyUpdate(newCart.items.map { it.product })
    }.launchIn(scope)
}