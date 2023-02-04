package me.haymob.shop.android.screens.customer

import androidx.compose.foundation.layout.*
import androidx.compose.material.Button
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import me.haymob.shop.android.extensions.Porcelain
import me.haymob.shop.android.components.InputTextField
import me.haymob.shop.android.components.Loader
import me.haymob.shop.android.components.TopBar
import me.haymob.shop.android.components.TopBarNavigationType
import me.haymob.shop.android.navigation.NavigationItem
import me.haymob.shop.app
import me.haymob.shop.ui.customer.address.create.CreateAddressUIEffect
import me.haymob.shop.ui.customer.address.create.CreateAddressUIStore
import me.haymob.shop.ui.customer.address.create.actions.createAddress
import me.haymob.shop.ui.customer.address.create.actions.updateField

@Composable
fun CreateAddress(
    navController: NavHostController,
    store: CreateAddressUIStore = remember {
        app.koin.get()
    }
) {
    val state = store.state.collectAsState().value

    LaunchedEffect(key1 = Unit) {
        store.effect.collect {
            when (it) {
                is CreateAddressUIEffect.Successes -> navController.popBackStack()
                is CreateAddressUIEffect.Error -> navController.navigate(
                    NavigationItem.Error.route(
                        it.message
                    )
                )
            }
        }
    }

    Scaffold(
        topBar = {
            TopBar(
                "New Address".uppercase(),
                TopBarNavigationType.Back(onAction = navController::popBackStack)
            )
        },
        backgroundColor = Color.Porcelain
    ) { padding ->
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
                    Text("Create")
                }
            }
            if (state.isLoading) Loader(Modifier.matchParentSize())
        }
    }
}