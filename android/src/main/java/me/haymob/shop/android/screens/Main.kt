package me.haymob.shop.android.screens

import androidx.compose.foundation.layout.padding
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.compose.*
import com.google.accompanist.pager.ExperimentalPagerApi
import me.haymob.shop.android.components.BottomNavigationBar
import me.haymob.shop.android.screens.cart.Cart
import me.haymob.shop.android.screens.cart.Checkout
import me.haymob.shop.android.screens.catalog.ProductDetail
import me.haymob.shop.android.components.ErrorAlert
import me.haymob.shop.android.extensions.fromBase64String
import me.haymob.shop.android.screens.customer.*
import me.haymob.shop.android.navigation.NavigationItem
import me.haymob.shop.android.screens.catalog.Catalog
import me.haymob.shop.android.screens.wishlist.Wishlist

@ExperimentalPagerApi
@ExperimentalMaterialApi
@Composable
fun MainScreen() {
    val navController = rememberNavController()
    Scaffold(
        bottomBar = { BottomNavigationBar(navController) }
    ) { padding ->
        NavHost(
            navController,
            startDestination = NavigationItem.Catalog.route(),
            modifier = Modifier.padding(padding),
        ) {
            composable(NavigationItem.Catalog.route()) {
//                val categoryId = it.arguments?.getString("categoryId")
                Catalog(navController)
            }
            composable(NavigationItem.Wishlist.route()) {
                Wishlist(navController)
            }
            composable(NavigationItem.Cart.route()) {
                Cart(navController)
            }
            composable(NavigationItem.Customer.route()) {
                Customer(navController)
            }
            composable(NavigationItem.ProductDetail.route()) {
                val productId = it.arguments?.getString("productId") ?: return@composable
                ProductDetail(navController, productId)
            }
            composable(NavigationItem.Login.route()) {
                Login(navController)
            }
            composable(NavigationItem.Signup.route()) {
                Signup(navController)
            }
            dialog(NavigationItem.Error.route()) {
                val message = it.arguments?.getString("message")?.fromBase64String() ?: return@dialog
                ErrorAlert(navController, message)
            }
            composable(NavigationItem.Account.route()) {
                Account(navController)
            }
            composable(NavigationItem.AddressList.route()) {
                AddressList(navController)
            }
            composable(NavigationItem.CreateAddress.route()) {
                CreateAddress(navController)
            }
            composable(NavigationItem.EditAddress.route()) {
                val addressId = it.arguments?.getString("addressId") ?: return@composable
                EditAddress(navController, addressId)
            }
            composable(NavigationItem.Checkout.route()) {
                Checkout(navController)
            }
            composable(NavigationItem.OrderList.route()) {
                OrderList(navController)
            }
            composable(NavigationItem.OrderDetail.route()) {
                val orderId = it.arguments?.getString("orderId") ?: return@composable
                OrderDetail(navController, orderId)
            }
        }
    }
}
