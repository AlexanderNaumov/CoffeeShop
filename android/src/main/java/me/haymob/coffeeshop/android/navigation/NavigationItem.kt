package me.haymob.coffeeshop.android.navigation

import me.haymob.coffeeshop.android.R
import me.haymob.coffeeshop.android.extensions.toBase64String

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
    object ProductDetail: NavigationItem("product/{productId}", title = "ProductDetail") {
        fun route(productId: String) = "product/$productId"
    }
    object Login: NavigationItem("login", title = "Login") {
        val route = routePath
    }
    object Signup: NavigationItem("signup", title = "Signup") {
        val route = routePath
    }
    object Error: NavigationItem("error/{message}", title = "Error") {
        fun route(message: String) = "error/${message.toBase64String()}"
    }
    object Account: NavigationItem("account", title = "Account") {
        val route = routePath
    }
    object AddressList: NavigationItem("address_list", title = "AddressList") {
        val route = routePath
    }
    object CreateAddress: NavigationItem("create_address", title = "CreateAddress") {
        val route = routePath
    }
    object EditAddress: NavigationItem("edit_address/{addressId}", title = "EditAddress") {
        fun route(addressId: String) = "edit_address/$addressId"
    }
}