package me.haymob.shop.ui.customer.wishlist.actions

import me.haymob.shop.domain.customer.actions.removeProductFromWishlist
import me.haymob.shop.entities.Product
import me.haymob.shop.ui.customer.wishlist.WishlistUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun WishlistUIStore.removeProductFromWishlist(product: Product) = customerStore.removeProductFromWishlist(product)