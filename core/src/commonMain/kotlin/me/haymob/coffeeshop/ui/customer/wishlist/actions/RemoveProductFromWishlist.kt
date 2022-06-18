package me.haymob.coffeeshop.ui.customer.wishlist.actions

import me.haymob.coffeeshop.domain.customer.actions.removeProductFromWishlist
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.ui.customer.wishlist.WishlistUIStore

fun WishlistUIStore.removeProductFromWishlist(product: Product) = customerStore.removeProductFromWishlist(product)