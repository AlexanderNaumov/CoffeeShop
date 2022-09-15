package me.haymob.coffeeshop.android.customer

import androidx.compose.foundation.layout.*
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
import me.haymob.coffeeshop.android.components.TopBarNavigationType
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.app
import me.haymob.coffeeshop.ui.customer.address.create.CreateAddressUIEffect
import me.haymob.coffeeshop.ui.customer.address.create.CreateAddressUIStore
import me.haymob.coffeeshop.ui.customer.address.create.actions.createAddress
import me.haymob.coffeeshop.ui.customer.address.create.actions.updateField
import me.haymob.coffeeshop.ui.customer.login.LoginUIEffect
import me.haymob.coffeeshop.ui.customer.login.actions.login
import me.haymob.coffeeshop.ui.customer.login.actions.updateField

@Composable
fun CreateAddressScreen(navigator: Navigator, store: CreateAddressUIStore = app.koin.get()) {
    CreateAddress(navigator, store)
}

@Composable
private fun CreateAddress(navigator: Navigator, store: CreateAddressUIStore) {
    val state = store.state.collectAsState().value

    LaunchedEffect(key1 = Unit) {
        store.effect.collect {
            when (it) {
                is CreateAddressUIEffect.Successes -> navigator.back()
                is CreateAddressUIEffect.Error -> navigator.navigate(NavigationItem.Error.route(it.message))
            }
        }
    }

    Scaffold(
        topBar = { TopBar("New Address".uppercase(), TopBarNavigationType.Back(onAction = navigator::back)) },
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
                        onClick = { store.createAddress() },
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp)
                    ) {
                        Text(text = "Create")
                    }
                }
                if (state.isLoading) Loader(modifier = Modifier.matchParentSize())
            }
        },
        backgroundColor = Color.Porcelain
    )
}