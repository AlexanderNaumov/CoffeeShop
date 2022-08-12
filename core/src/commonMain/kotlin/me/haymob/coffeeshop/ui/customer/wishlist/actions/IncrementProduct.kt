package me.haymob.coffeeshop.ui.customer.wishlist.actions

import me.haymob.coffeeshop.domain.cart.actions.incrementProduct
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.ui.customer.wishlist.WishlistUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun WishlistUIStore.incrementProduct(product: Product) = cartStore.incrementProduct(product)