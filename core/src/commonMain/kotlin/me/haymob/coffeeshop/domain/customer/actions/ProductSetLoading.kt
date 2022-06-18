package me.haymob.coffeeshop.domain.customer.actions

import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.entities.Product

fun CustomerStore.productSetLoading(product: Product, loading: Boolean) {
    setState {
        copy(
            customer = customer?.let { customer ->
                customer.copy(
                    wishlist = customer.wishlist.map {
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