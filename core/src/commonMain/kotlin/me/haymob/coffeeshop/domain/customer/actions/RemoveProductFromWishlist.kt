package me.haymob.coffeeshop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.flow.onResult

fun CustomerStore.removeProductFromWishlist(product: Product) {
    val customerId = currentState.customer?.id ?: return

    setState { copy(isLoading = true) }
    shopService.removeProductFromWishlist(customerId, product.id).onResult(::didLoadUser).launchIn(scope)
}