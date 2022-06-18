package me.haymob.coffeeshop.ui.customer.wishlist.actions

import me.haymob.coffeeshop.domain.cart.actions.decrementProduct
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.ui.customer.wishlist.WishlistUIStore

fun WishlistUIStore.decrementProduct(product: Product) = cartStore.decrementProduct(product)