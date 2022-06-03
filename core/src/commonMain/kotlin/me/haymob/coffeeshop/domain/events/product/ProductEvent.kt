package me.haymob.coffeeshop.domain.events.product

import me.haymob.coffeeshop.domain.events.Event
import me.haymob.coffeeshop.entities.Product

sealed class ProductEvent: Event {
    object CatalogDidLoad: ProductEvent()
    class CartDidLoad(val products: List<Product>): ProductEvent()
    class ProductSetLoading(val product: Product, val loading: Boolean): ProductEvent()
}