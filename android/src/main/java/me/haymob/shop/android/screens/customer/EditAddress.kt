package me.haymob.shop.android.screens.customer

import androidx.compose.foundation.layout.*
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
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
import me.haymob.shop.ui.customer.address.edit.EditAddressUIEffect
import me.haymob.shop.ui.customer.address.edit.EditAddressUIStore
import me.haymob.shop.ui.customer.address.edit.actions.removeAddress
import me.haymob.shop.ui.customer.address.edit.actions.updateAddress
import me.haymob.shop.ui.customer.address.edit.actions.updateField
import org.koin.core.parameter.ParametersHolder

fun editAddressScreen(
    navController: NavHostController,
    addressId: String,
    store: EditAddressUIStore = app.koin.get {
        ParametersHolder(
            _values = mutableListOf(addressId)
        )
    }
): @Composable () -> Unit = {
    val state = store.state.collectAsState().value

    LaunchedEffect(key1 = Unit) {
        store.effect.collect {
            when (it) {
                is EditAddressUIEffect.Successes -> navController.popBackStack()
                is EditAddressUIEffect.Error -> navController.navigate(
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
                "Edit Address".uppercase(),
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
                    onClick = { store.updateAddress() },
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp)
                ) {
                    Text("Update")
                }
                Button(
                    onClick = { store.removeAddress() },
                    colors = ButtonDefaults.buttonColors(
                        contentColor = Color.White,
                        backgroundColor = Color.Red
                    ),
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp)
                ) {
                    Text("Remove")
                }
            }
            if (state.isLoading) Loader(Modifier.matchParentSize())
        }
    }
}