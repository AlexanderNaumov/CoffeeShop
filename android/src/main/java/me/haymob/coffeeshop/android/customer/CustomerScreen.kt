package me.haymob.coffeeshop.android.customer

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowForwardIos
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.Loader
import me.haymob.coffeeshop.android.components.TopBar
import me.haymob.coffeeshop.android.components.TopBarActionItem
import me.haymob.coffeeshop.android.components.TopBarActionType
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.ui.customer.CustomerUIStore
import me.haymob.coffeeshop.ui.customer.actions.logout

class CustomerScreen(
    val navigator: Navigator,
    val store: CustomerUIStore
) {
    @Composable
    fun Body() {
        val state = store.state.collectAsState().value
        val openLogoutDialog = remember { mutableStateOf(false)  }
        Scaffold(
            topBar = {
                TopBar(
                    "Customer".uppercase(),
                    actionType =  if (state.isLoggedIn) {
                        TopBarActionType.DropdownMenu(listOf(TopBarActionItem("Logout") { openLogoutDialog.value = true }))
                    } else {
                        TopBarActionType.None
                    }
                )
            },
            content = { _ ->
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
                                navigator.navigate(NavigationItem.Account.route())
                            }
                            CustomerListCell("Addresses") {
                                navigator.navigate(NavigationItem.AddressList.route())
                            }
                            CustomerListCell("Orders") {

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
                            navigator.navigate("login")
                        }) {
                            Text("Login")
                        }
                        TextButton(
                            onClick = { navigator.navigate("signup") },
                            modifier = Modifier.padding(top = 10.dp)
                        ) {
                            Text("Register")
                        }
                    }
                }
            },
            backgroundColor = Color.Porcelain
        )
    }
}

@Composable
private fun CustomerListCell(title: String, onClick: () -> Unit) {
    Column(Modifier.background(Color.White)) {
        TextButton(
            onClick = onClick,
            colors = ButtonDefaults.buttonColors(
                contentColor = Color.Black,
                backgroundColor = Color.White
            )
        ) {
            Row(
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .height(50.dp)
                    .fillMaxWidth()
            ) {
                Text(
                    text = title,
                    fontSize = 17.sp,
                    modifier = Modifier.padding(start = 8.dp)
                )
                Icon(
                    Icons.Filled.ArrowForwardIos,
                    contentDescription = null
                )
            }
        }
        Divider()
    }
}

@Composable
private fun LogoutAlert(onLogout: () -> Unit, onCancel: () -> Unit) {
    AlertDialog(
        onDismissRequest = onCancel,
        title = { Text("Logout") },
        text = { Text("Do you want to leave?") },
        confirmButton = {
            Button(onClick = onLogout) {
                Text("Logout")
            }
        },
        dismissButton = {
            Button(onClick = onCancel) {
                Text("Cancel")
            }
        }
    )
}