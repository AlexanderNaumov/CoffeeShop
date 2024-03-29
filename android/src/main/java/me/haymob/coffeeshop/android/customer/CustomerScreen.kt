package me.haymob.coffeeshop.android.customer

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.*
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.app
import me.haymob.coffeeshop.ui.customer.CustomerUIStore
import me.haymob.coffeeshop.ui.customer.actions.logout

fun customerScreen(
    navController: NavHostController,
    store: CustomerUIStore = app.koin.get()
): @Composable () -> Unit = {
    val state = store.state.collectAsState().value
    val openLogoutDialog = remember { mutableStateOf(false) }
    Scaffold(
        topBar = {
            TopBar(
                "Customer".uppercase(),
                actionType = if (state.isLoggedIn) {
                    TopBarActionType.DropdownMenu(listOf(TopBarActionItem("Logout") {
                        openLogoutDialog.value = true
                    }))
                } else {
                    TopBarActionType.None
                }
            )
        },
        backgroundColor = Color.Porcelain
    ) { _ ->
        if (openLogoutDialog.value) {
            LogoutAlert(
                onLogout = {
                    openLogoutDialog.value = false
                    store.logout()
                },
                onCancel = {
                    openLogoutDialog.value = false
                }
            )
        }
        if (state.isLoggedIn) {
            Box(Modifier.fillMaxSize()) {
                Column(
                    modifier = Modifier
                        .fillMaxSize()
                        .verticalScroll(rememberScrollState())
                ) {
                    CustomerListCell("Account") {
                        navController.navigate(NavigationItem.Account.route())
                    }
                    CustomerListCell("Addresses") {
                        navController.navigate(NavigationItem.AddressList.route())
                    }
                    CustomerListCell("Orders") {
                        navController.navigate(NavigationItem.OrderList.route())
                    }
                }
                if (state.isLoading) Loader(Modifier.matchParentSize())
            }
        } else {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center,
                modifier = Modifier.fillMaxSize()
            ) {
                TextButton(onClick = {
                    navController.navigate("login")
                }) {
                    Text("Login")
                }
                TextButton(
                    onClick = { navController.navigate("signup") },
                    modifier = Modifier.padding(top = 10.dp)
                ) {
                    Text("Register")
                }
            }
        }
    }
}