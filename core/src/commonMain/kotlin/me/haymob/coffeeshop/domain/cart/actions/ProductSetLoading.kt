package me.haymob.coffeeshop.domain.cart.actions

import me.haymob.coffeeshop.domain.cart.CartStore
import me.haymob.coffeeshop.entities.Product

fun CartStore.productSetLoading(product: Product, loading: Boolean) {
    setState {
        if (cart == null) return@setState this
        copy(
            cart = cart.copy(
                items = cart.items.map { item ->
                    item.copy(
                        product = if (product.id == item.product.id) {
                            item.product.copy(isLoading = loading)
                        } else {
                            item.product
                        }
                    )
                }
            )
        )
    }
}