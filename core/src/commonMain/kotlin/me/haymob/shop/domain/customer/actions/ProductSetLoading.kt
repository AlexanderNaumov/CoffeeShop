package me.haymob.shop.domain.customer.actions

import me.haymob.shop.domain.customer.CustomerStore
import me.haymob.shop.entities.Product

internal fun CustomerStore.productSetLoading(product: Product, loading: Boolean) {
    setState {
        copy(
            customer = customer?.run {
                copy(
                    wishlist = wishlist.map {
                        if (product.id == it.id) {
                            it.copy(isLoading = loading)
                        } else {
                            it
                        }
                    }
                )
            }
        )
    }
}