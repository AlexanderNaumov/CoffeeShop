package me.haymob.shop.domain.customer.actions

import kotlinx.coroutines.flow.launchIn
import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.entities.Product
import me.haymob.shop.flow.onResult

internal fun CustomerStore.addProductToWishlist(product: Product) {
    val customerId = currentState.customer?.id ?: return

    setState { copy(isLoading = true) }
    customerService.addProductToWishlist(customerId, product.id).onResult(::didLoadUser).launchIn(scope)
}