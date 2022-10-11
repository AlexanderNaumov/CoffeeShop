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
import me.haymob.coffeeshop.android.cart.CheckoutScreen
import me.haymob.coffeeshop.android.catalog.CatalogScreen
import me.haymob.coffeeshop.android.catalog.ProductDetailScreen
import me.haymob.coffeeshop.android.components.ErrorAlert
import me.haymob.coffeeshop.android.customer.*
import me.haymob.coffeeshop.android.extensions.fromBase64String
import me.haymob.coffeeshop.android.wishlist.WishlistScreen
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.android.navigation.Navigator
import org.koin.core.parameter.ParametersHolder

private var isCreate = false

@ExperimentalMaterialApi
class MainActivity: ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (isCreate.not()) {
            isCreate = true

            coreInit()
            val store = app.koin.get<AppStore>()
            store.load()
        }

        setContent {
            MainScreen()
        }
    }
}

@ExperimentalMaterialApi
@Composable
fun MainScreen() {
    val navController = rememberNavController()
    val defaultNavigator = object: Navigator {
        override fun navigate(route: String) { navController.navigate(route) }
        override fun back() { navController.popBackStack() }
    }

    Scaffold(
        bottomBar = { BottomNavigationBar(navController).Body() },
        content = { padding ->
            NavHost(
                navController,
                startDestination = NavigationItem.Catalog.route(),
                modifier = Modifier.padding(padding),
            ) {
                composable(NavigationItem.Catalog.route()) {
                    CatalogScreen(defaultNavigator, app.koin.get()).Body()
                }
                composable(NavigationItem.Wishlist.route()) {
                    WishlistScreen(defaultNavigator, app.koin.get()).Body()
                }
                composable(NavigationItem.Cart.route()) {
                    CartScreen(defaultNavigator, app.koin.get()).Body()
                }
                composable(NavigationItem.Customer.route()) {
                    CustomerScreen(defaultNavigator, app.koin.get()).Body()
                }
                composable(NavigationItem.ProductDetail.route()) {
                    val productId = it.arguments?.getString("productId") ?: return@composable
                    ProductDetailScreen(
                        defaultNavigator,
                        app.koin.get { ParametersHolder(_values = mutableListOf(productId)) }
                    ).Body()
                }
                composable(NavigationItem.Login.route()) {
                    LoginScreen(defaultNavigator, app.koin.get()).Body()
                }
                composable(NavigationItem.Signup.route()) {
                    SignupScreen(defaultNavigator, app.koin.get()).Body()
                }
                dialog(NavigationItem.Error.route()) {
                    val message = it.arguments?.getString("message")?.fromBase64String() ?: return@dialog
                    ErrorAlert(message, defaultNavigator)
                }
                composable(NavigationItem.Account.route()) {
                    AccountScreen(defaultNavigator, app.koin.get()).Body()
                }
                composable(NavigationItem.AddressList.route()) {
                    AddressListScreen(defaultNavigator, app.koin.get()).Body()
                }
                composable(NavigationItem.CreateAddress.route()) {
                    CreateAddressScreen(defaultNavigator, app.koin.get()).Body()
                }
                composable(NavigationItem.EditAddress.route()) {
                    val addressId = it.arguments?.getString("addressId") ?: return@composable
                    EditAddressScreen(
                        defaultNavigator,
                        app.koin.get { ParametersHolder(_values = mutableListOf(addressId)) }
                    ).Body()
                }
                composable(NavigationItem.Checkout.route()) {
                    CheckoutScreen(defaultNavigator, app.koin.get()).Body()
                }
            }
        }
    )
}

class BottomNavigationBar(private val navController: NavController) {

    private var currentTab: String? = null
    private val items = listOf(
        NavigationItem.Catalog,
        NavigationItem.Wishlist,
        NavigationItem.Cart,
        NavigationItem.Customer
    )

    @Composable
    fun Body() {
        BottomNavigation(
            backgroundColor = Color.White,
            contentColor = Color.Black
        ) {
            val navBackStackEntry by navController.currentBackStackEntryAsState()
            val currentRoute = navBackStackEntry?.destination?.route

            if (items.any { it.route() == currentRoute } && currentTab != currentRoute) {
                currentTab = currentRoute
            }

            items.forEach { item ->
                BottomNavigationItem(
                    icon = { Icon(painterResource(id = item.icon!!), contentDescription = item.title) },
                    label = { Text(item.title) },
                    selectedContentColor = Color.Black,
                    unselectedContentColor = Color.Black.copy(0.4f),
                    alwaysShowLabel = true,
                    selected = currentTab == item.route(),
                    onClick = {
                        if (currentTab == item.route()) {
                            navController.popBackStack(currentTab!!, inclusive = false, saveState = false)
                            return@BottomNavigationItem
                        }
                        currentTab = item.route()
                        navController.navigate(item.route()) {
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
}