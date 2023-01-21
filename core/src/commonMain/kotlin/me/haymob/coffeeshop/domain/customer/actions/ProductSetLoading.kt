package me.haymob.coffeeshop.domain.customer.actions

import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.entities.Product

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