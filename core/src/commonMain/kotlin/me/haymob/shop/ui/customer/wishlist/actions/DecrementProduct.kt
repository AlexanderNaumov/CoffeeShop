package me.haymob.shop.ui.customer.wishlist.actions

import me.haymob.shop.domain.cart.actions.decrementProduct
import me.haymob.shop.entities.Product
import me.haymob.shop.ui.customer.wishlist.WishlistUIStore
import me.haymob.multiplatformannotations._JsExport

@_JsExport
fun WishlistUIStore.decrementProduct(product: Product) = cartStore.decrementProduct(product)