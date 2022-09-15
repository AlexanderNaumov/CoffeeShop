package me.haymob.coffeeshop.android

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.padding
import androidx.compose.material.*
import me.haymob.coffeeshop.coreInit
import me.haymob.coffeeshop.app
import me.haymob.coffeeshop.domain.AppStore
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.navigation.NavController
import androidx.compose.runtime.getValue
import androidx.navigation.compose.*
import me.haymob.coffeeshop.android.cart.CartScreen
import me.haymob.coffeeshop.android.catalog.CatalogScreen
import me.haymob.coffeeshop.android.catalog.ProductDetailScreen
import me.haymob.coffeeshop.android.components.ErrorAlert
import me.haymob.coffeeshop.android.customer.*
import me.haymob.coffeeshop.android.extensions.fromBase64String
import me.haymob.coffeeshop.android.wishlist.WishlistScreen
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.android.navigation.Navigator

class MainActivity: ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        coreInit()
        val store = app.koin.get<AppStore>()
        store.load()

        setContent {
            MainScreen()
        }
    }
}

@Composable
fun MainScreen() {
    val navController = rememberNavController()
    val defaultNavigator = object: Navigator {
        override fun navigate(route: String) { navController.navigate(route) }
        override fun back() { navController.popBackStack() }
    }

    Scaffold(
        bottomBar = { BottomNavigationBar(navController) },
        content = { padding ->
            NavHost(
                navController,
                startDestination = NavigationItem.Catalog.route,
                modifier = Modifier.padding(padding),
            ) {
                composable(NavigationItem.Catalog.routePath) {
                    CatalogScreen(defaultNavigator)
                }
                composable(NavigationItem.Wishlist.routePath) {
                    WishlistScreen(defaultNavigator)
                }
                composable(NavigationItem.Cart.routePath) {
                    CartScreen(defaultNavigator)
                }
                composable(NavigationItem.Customer.routePath) {
                    CustomerScreen(defaultNavigator)
                }
                composable(NavigationItem.ProductDetail.routePath) {
                    val productId = it.arguments?.getString("productId") ?: return@composable
                    ProductDetailScreen(productId, defaultNavigator)
                }
                composable(NavigationItem.Login.routePath) {
                    LoginScreen(defaultNavigator)
                }
                composable(NavigationItem.Signup.routePath) {
                    SignupScreen(defaultNavigator)
                }
                dialog(NavigationItem.Error.routePath) {
                    val message = it.arguments?.getString("message")?.fromBase64String() ?: return@dialog
                    ErrorAlert(message, defaultNavigator)
                }
                composable(NavigationItem.Account.routePath) {
                    AccountScreen(defaultNavigator)
                }
                composable(NavigationItem.AddressList.routePath) {
                    AddressListScreen(defaultNavigator)
                }
                composable(NavigationItem.CreateAddress.routePath) {
                    CreateAddressScreen(defaultNavigator)
                }
                composable(NavigationItem.EditAddress.routePath) {
                    val addressId = it.arguments?.getString("addressId") ?: return@composable
                    EditAddressScreen(addressId, defaultNavigator)
                }
            }
        }
    )
}

@Composable
fun BottomNavigationBar(navController: NavController) {
    val items = listOf(
        NavigationItem.Catalog,
        NavigationItem.Wishlist,
        NavigationItem.Cart,
        NavigationItem.Customer
    )

    BottomNavigation(
        backgroundColor = Color.White,
        contentColor = Color.Black
    ) {
        val navBackStackEntry by navController.currentBackStackEntryAsState()
        val currentRoute = navBackStackEntry?.destination?.route

        val currentItem = items.find { it.routePath == currentRoute }
        if (currentItem != null) items.forEach {
            it.isSelected = it == currentItem
        }

        items.forEach { item ->
            BottomNavigationItem(
                icon = { Icon(painterResource(id = item.icon!!), contentDescription = item.title) },
                label = { Text(text = item.title) },
                selectedContentColor = Color.Black,
                unselectedContentColor = Color.Black.copy(0.4f),
                alwaysShowLabel = true,
                selected = item.isSelected,
                onClick = {
                    navController.navigate(item.routePath) {
                        navController.graph.startDestinationRoute?.let { route ->
                            popUpTo(route) {
                                saveState = true
                            }
                        }
                        launchSingleTop = true
                        restoreState = true
                    }
                }
            )
        }
    }
}