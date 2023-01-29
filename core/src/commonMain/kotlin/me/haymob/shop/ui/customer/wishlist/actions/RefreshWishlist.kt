package me.haymob.shop.ui.customer.wishlist.actions

import me.haymob.shop.domain.customer.actions.loadCustomer
import me.haymob.shop.ui.customer.wishlist.WishlistUIStore

fun WishlistUIStore.refreshWishlist() {
    setState { copy(isRefreshing = true) }
    customerStore.loadCustomer()
}
