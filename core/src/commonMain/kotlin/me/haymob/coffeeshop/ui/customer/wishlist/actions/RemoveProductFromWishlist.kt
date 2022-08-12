package me.haymob.coffeeshop.ui.customer.wishlist.actions

import me.haymob.coffeeshop.domain.customer.actions.removeProductFromWishlist
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.ui.customer.wishlist.WishlistUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun WishlistUIStore.removeProductFromWishlist(product: Product) = customerStore.removeProductFromWishlist(product)