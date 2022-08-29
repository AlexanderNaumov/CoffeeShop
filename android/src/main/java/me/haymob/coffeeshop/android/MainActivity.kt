package me.haymob.coffeeshop.android

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.material.*
import me.haymob.coffeeshop.*
import me.haymob.coffeeshop.domain.catalog.CatalogStore
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.painterResource
import androidx.navigation.NavController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import androidx.compose.runtime.getValue
import me.haymob.coffeeshop.android.cart.CartScreen
import me.haymob.coffeeshop.android.catalog.CatalogScreen
import me.haymob.coffeeshop.android.catalog.ProductDetailScreen
import me.haymob.coffeeshop.android.customer.CustomerScreen
import me.haymob.coffeeshop.android.wishlist.WishlistScreen
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.android.navigation.Navigator

class MainActivity: ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        coreInit()
        val store = app.koin.get<CatalogStore>()

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
            Box(modifier = Modifier.padding(padding)) {
                NavHost(navController, startDestination = NavigationItem.Catalog.route) {
                    composable(NavigationItem.Catalog.routePath) {
                        CatalogScreen(defaultNavigator)
                    }
                    composable(NavigationItem.Wishlist.routePath) {
                        WishlistScreen()
                    }
                    composable(NavigationItem.Cart.routePath) {
                        CartScreen()
                    }
                    composable(NavigationItem.Customer.routePath) {
                        CustomerScreen()
                    }
                    composable(NavigationItem.ProductDetail.routePath) {
                        val productId = it.arguments?.getString("productId") ?: return@composable
                        ProductDetailScreen(productId, defaultNavigator)
                    }
                }
            }
        },
        backgroundColor = colorResource(R.color.white)
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
        backgroundColor = colorResource(id = R.color.purple_700),
        contentColor = Color.White
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
                selectedContentColor = Color.White,
                unselectedContentColor = Color.White.copy(0.4f),
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