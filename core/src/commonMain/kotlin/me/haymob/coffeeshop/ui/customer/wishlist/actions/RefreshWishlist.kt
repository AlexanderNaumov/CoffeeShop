package me.haymob.coffeeshop.ui.customer.wishlist.actions

import me.haymob.coffeeshop.domain.customer.actions.loadCustomer
import me.haymob.coffeeshop.ui.customer.wishlist.WishlistUIStore

fun WishlistUIStore.refreshWishlist() {
    setState { copy(isRefreshing = true) }
    customerStore.loadCustomer()
}
