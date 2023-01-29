package me.haymob.shop.android.navigation

import me.haymob.shop.android.R
import me.haymob.shop.android.extensions.toBase64String

sealed class NavigationItem(
    val icon: Int? = null,
    val title: String,
) {
    object Catalog: NavigationItem(R.drawable.ic_shop, "Shop") {
        override fun route() = "shop"
    }
    object Wishlist: NavigationItem(R.drawable.ic_wishlist, "Wishlist") {
        override fun route() = "wishlist"
    }
    object Cart: NavigationItem(R.drawable.ic_basket, "Cart") {
        override fun route() = "cart"
    }
    object Customer: NavigationItem(R.drawable.ic_customer, "Customer") {
        override fun route() = "customer"
    }
    object ProductDetail: NavigationItem(title = "ProductDetail") {
        override fun route() = "product/{productId}"
        fun route(productId: String) = "product/$productId"
    }
    object Login: NavigationItem(title = "Login") {
        override fun route() = "login"
    }
    object Signup: NavigationItem(title = "Signup") {
        override fun route() = "signup"
    }
    object Error: NavigationItem(title = "Error") {
        override fun route() = "error/{message}"
        fun route(message: String) = "error/${message.toBase64String()}"
    }
    object Account: NavigationItem(title = "Account") {
        override fun route() = "account"
    }
    object AddressList: NavigationItem(title = "AddressList") {
        override fun route() = "address_list"
    }
    object CreateAddress: NavigationItem(title = "CreateAddress") {
        override fun route() = "create_address"
    }
    object EditAddress: NavigationItem(title = "EditAddress") {
        override fun route() = "edit_address/{addressId}"
        fun route(addressId: String) = "edit_address/$addressId"
    }
    object Checkout: NavigationItem(title = "Checkout") {
        override fun route() = "checkout"
    }

    object OrderList: NavigationItem(title = "OrderList") {
        override fun route() = "order_list"
    }

    object OrderDetail: NavigationItem(title = "OrderList") {
        override fun route() = "order/{orderId}"
        fun route(orderId: String) = "order/$orderId"
    }

    open fun route(): String = ""
}