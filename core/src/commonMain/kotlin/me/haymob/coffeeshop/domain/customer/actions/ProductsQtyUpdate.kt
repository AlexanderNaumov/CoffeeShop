package me.haymob.coffeeshop.domain.customer.actions

import me.haymob.coffeeshop.domain.customer.CustomerStore
import me.haymob.coffeeshop.entities.Product

fun CustomerStore.productsQtyUpdate(products: List<Product>) {
    setState {
        copy(
            customer = customer?.let { customer ->
                customer.copy(
                    wishlist = customer.wishlist.map { product ->
                        products.find { it.id == product.id } ?: product.copy(qty = 0)
                    }
                )
            }
        )
    }
}