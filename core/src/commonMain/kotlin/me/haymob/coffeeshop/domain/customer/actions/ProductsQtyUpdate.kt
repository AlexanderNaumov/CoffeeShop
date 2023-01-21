package me.haymob.coffeeshop.domain.customer.actions

import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.entities.Product

internal fun CustomerStore.productsQtyUpdate(products: List<Product>) {
    setState {
        copy(
            customer = customer?.run {
                copy(
                    wishlist = wishlist.map { product ->
                        val qty = products.find { it.id == product.id }?.qty ?: 0
                        product.copy(qty = qty)
                    }
                )
            }
        )
    }
}