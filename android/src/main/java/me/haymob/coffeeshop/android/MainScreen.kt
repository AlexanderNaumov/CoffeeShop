package me.haymob.coffeeshop.android

import androidx.compose.foundation.layout.padding
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.dialog
import androidx.navigation.compose.rememberNavController
import me.haymob.coffeeshop.android.cart.cartScreen
import me.haymob.coffeeshop.android.cart.checkoutScreen
import me.haymob.coffeeshop.android.catalog.catalogScreen
import me.haymob.coffeeshop.android.catalog.productDetailScreen
import me.haymob.coffeeshop.android.components.ErrorAlert
import me.haymob.coffeeshop.android.components.bottomNavigationBar
import me.haymob.coffeeshop.android.customer.*
import me.haymob.coffeeshop.android.extensions.fromBase64String
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.android.wishlist.wishlistScreen

@ExperimentalMaterialApi
@Composable
fun MainScreen() {
    val navController = rememberNavController()
    Scaffold(bottomBar = { bottomNavigationBar(navController)() }) { padding ->
        NavHost(
            navController,
            startDestination = NavigationItem.Catalog.route(),
            modifier = Modifier.padding(padding),
        ) {
            composable(NavigationItem.Catalog.route()) {
                catalogScreen(navController)()
            }
            composable(NavigationItem.Wishlist.route()) {
                wishlistScreen(navController)()
            }
            composable(NavigationItem.Cart.route()) {
                cartScreen(navController)()
            }
            composable(NavigationItem.Customer.route()) {
                customerScreen(navController)()
            }
            composable(NavigationItem.ProductDetail.route()) {
                val productId = it.arguments?.getString("productId") ?: return@composable
                productDetailScreen(navController, productId)()
            }
            composable(NavigationItem.Login.route()) {
                loginScreen(navController)()
            }
            composable(NavigationItem.Signup.route()) {
                signupScreen(navController)()
            }
            dialog(NavigationItem.Error.route()) {
                val message = it.arguments?.getString("message")?.fromBase64String() ?: return@dialog
                ErrorAlert(navController, message)
            }
            composable(NavigationItem.Account.route()) {
                accountScreen(navController)()
            }
            composable(NavigationItem.AddressList.route()) {
                addressListScreen(navController)()
            }
            composable(NavigationItem.CreateAddress.route()) {
                createAddressScreen(navController)()
            }
            composable(NavigationItem.EditAddress.route()) {
                val addressId = it.arguments?.getString("addressId") ?: return@composable
                editAddressScreen(navController, addressId)()
            }
            composable(NavigationItem.Checkout.route()) {
                checkoutScreen(navController)()
            }
            composable(NavigationItem.OrderList.route()) {
                orderListScreen(navController)()
            }
            composable(NavigationItem.OrderDetail.route()) {
                val orderId = it.arguments?.getString("orderId") ?: return@composable
                orderDetailScreen(navController, orderId)()
            }
        }
    }
}
