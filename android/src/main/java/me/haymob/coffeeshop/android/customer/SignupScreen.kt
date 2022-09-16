package me.haymob.coffeeshop.android.customer

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Button
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
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
import me.haymob.coffeeshop.ui.customer.signup.SignupUIEffect
import me.haymob.coffeeshop.ui.customer.signup.SignupUIStore
import me.haymob.coffeeshop.ui.customer.signup.actions.signup
import me.haymob.coffeeshop.ui.customer.signup.actions.updateField

class SignupScreen(
    val navigator: Navigator,
    val store: SignupUIStore
) {
    @Composable
    fun Body() {
        val state = store.state.collectAsState().value

        LaunchedEffect(key1 = Unit) {
            store.effect.collect {
                when (it) {
                    is SignupUIEffect.Successes -> navigator.back()
                    is SignupUIEffect.Error -> navigator.navigate(NavigationItem.Error.route(it.message))
                }
            }
        }

        Scaffold(
            topBar = { TopBar("Signup".uppercase()) },
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
                            .verticalScroll(rememberScrollState())
                    ) {
                        state.fields.map { field ->
                            InputTextField(field) {
                                store.updateField(field.type, it)
                            }
                        }
                        Button(
                            onClick = { store.signup() },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(horizontal = 16.dp)
                        ) {
                            Text(text = "Signup")
                        }
                    }
                    if (state.isLoading) Loader(modifier = Modifier.matchParentSize())
                }
            },
            backgroundColor = Color.Porcelain
        )
    }
}