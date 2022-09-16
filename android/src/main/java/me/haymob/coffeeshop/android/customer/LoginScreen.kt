package me.haymob.coffeeshop.android.customer

import androidx.compose.foundation.layout.*
import androidx.compose.material.Button
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.InputTextField
import me.haymob.coffeeshop.android.components.Loader
import me.haymob.coffeeshop.android.components.TopBar
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.ui.customer.login.LoginUIEffect
import me.haymob.coffeeshop.ui.customer.login.LoginUIStore
import me.haymob.coffeeshop.ui.customer.login.actions.login
import me.haymob.coffeeshop.ui.customer.login.actions.updateField

class LoginScreen(
    val navigator: Navigator,
    val store: LoginUIStore
) {
    @Composable
    fun Body() {
        val state = store.state.collectAsState().value

        LaunchedEffect(key1 = Unit) {
            store.effect.collect {
                when (it) {
                    is LoginUIEffect.Successes -> navigator.back()
                    is LoginUIEffect.Error -> navigator.navigate(NavigationItem.Error.route(it.message))
                }
            }
        }

        Scaffold(
            topBar = { TopBar("Login".uppercase()) },
            content = { padding ->
                Box(
                    modifier = Modifier
                        .padding(padding)
                        .fillMaxSize()
                ) {
                    Column(
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.Center,
                        modifier = Modifier
                            .fillMaxSize()
                    ) {
                        state.fields.map { field ->
                            InputTextField(field) {
                                store.updateField(field.type, it)
                            }
                        }
                        Button(
                            onClick = { store.login() },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(horizontal = 16.dp)
                        ) {
                            Text("Login")
                        }
                    }
                    if (state.isLoading) Loader(modifier = Modifier.matchParentSize())
                }
            },
            backgroundColor = Color.Porcelain
        )
    }
}