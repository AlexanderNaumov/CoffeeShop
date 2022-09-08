package me.haymob.coffeeshop.android.customer

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.material.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.Loader
import me.haymob.coffeeshop.android.components.TopBar
import me.haymob.coffeeshop.android.components.TopBarActionItem
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.ui.customer.CustomerUIStore
import me.haymob.coffeeshop.ui.customer.actions.logout
import me.haymob.coffeeshop.app

@Composable
fun CustomerScreen(navigator: Navigator, store: CustomerUIStore = app.koin.get()) {
    Customer(navigator, store)
}

@Composable
private fun Customer(navigator: Navigator, store: CustomerUIStore) {
    val state = store.state.collectAsState().value
    Scaffold(
        topBar = {
            TopBar(
                "Customer".uppercase(),
                if (state.isLoggedIn) {
                    listOf(TopBarActionItem("Logout", store::logout))
                } else {
                    emptyList()
                }
            )
        },
        content = { _ ->
            if (state.isLoggedIn) {
                Box(modifier = Modifier.fillMaxSize()) {

                    if (state.isLoading) {
                        Loader(modifier = Modifier.matchParentSize())
                    }
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
                        Text(text = "Login")
                    }
                    TextButton(
                        onClick = { navigator.navigate("signup") },
                        modifier = Modifier.padding(0.dp, 10.dp, 0.dp, 0.dp)
                    ) {
                        Text(text = "Register")
                    }
                }
            }
        },
        backgroundColor = Color.Porcelain
    )
}