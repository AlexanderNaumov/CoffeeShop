package me.haymob.coffeeshop.android.components

import androidx.compose.material.BottomNavigation
import androidx.compose.material.BottomNavigationItem
import androidx.compose.material.Icon
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.navigation.NavController
import androidx.navigation.compose.currentBackStackEntryAsState
import me.haymob.coffeeshop.android.navigation.NavigationItem

fun bottomNavigationBar(navController: NavController): @Composable () -> Unit {
    var currentTab: String? = null
    val items = listOf(
        NavigationItem.Catalog,
        NavigationItem.Wishlist,
        NavigationItem.Cart,
        NavigationItem.Customer
    )
    return {
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
                    icon = {
                        Icon(
                            painterResource(id = item.icon!!),
                            contentDescription = item.title
                        )
                    },
                    label = { Text(item.title) },
                    selectedContentColor = Color.Black,
                    unselectedContentColor = Color.Black.copy(0.4f),
                    alwaysShowLabel = true,
                    selected = currentTab == item.route(),
                    onClick = {
                        if (currentTab == item.route()) {
                            navController.popBackStack(
                                currentTab!!,
                                inclusive = false,
                                saveState = false
                            )
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