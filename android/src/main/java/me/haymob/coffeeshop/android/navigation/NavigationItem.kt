package me.haymob.coffeeshop.android.navigation

import me.haymob.coffeeshop.android.R

sealed class NavigationItem(
    val routePath: String,
    val icon: Int? = null,
    val title: String,
    var isSelected: Boolean = false
) {
    object Catalog: NavigationItem("shop", R.drawable.ic_shop, "Shop") {
        val route = routePath
    }
    object Wishlist: NavigationItem("wishlist", R.drawable.ic_wishlist, "Wishlist") {
        val route = routePath
    }
    object Cart: NavigationItem("cart", R.drawable.ic_basket, "Cart") {
        val route = routePath
    }
    object Customer: NavigationItem("customer", R.drawable.ic_customer, "Customer") {
        val route = routePath
    }
    object ProductDetail:  NavigationItem("product/{productId}", title = "ProductDetail") {
        fun route(productId: String) = "product/$productId"
    }
    object Login: NavigationItem("login", title = "Login") {
        val route = routePath
    }
    object Signup: NavigationItem("signup", title = "Signup") {
        val route = routePath
    }
}