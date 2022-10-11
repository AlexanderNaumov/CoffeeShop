package me.haymob.coffeeshop.android.customer

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
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.InputTextField
import me.haymob.coffeeshop.android.components.Loader
import me.haymob.coffeeshop.android.components.TopBar
import me.haymob.coffeeshop.android.components.TopBarNavigationType
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.ui.customer.address.edit.EditAddressUIEffect
import me.haymob.coffeeshop.ui.customer.address.edit.EditAddressUIStore
import me.haymob.coffeeshop.ui.customer.address.edit.actions.removeAddress
import me.haymob.coffeeshop.ui.customer.address.edit.actions.updateAddress
import me.haymob.coffeeshop.ui.customer.address.edit.actions.updateField

class EditAddressScreen(
    val navigator: Navigator,
    val store: EditAddressUIStore
) {
    @Composable
    fun Body() {
        val state = store.state.collectAsState().value

        LaunchedEffect(key1 = Unit) {
            store.effect.collect {
                when (it) {
                    is EditAddressUIEffect.Successes -> navigator.back()
                    is EditAddressUIEffect.Error -> navigator.navigate(NavigationItem.Error.route(it.message))
                }
            }
        }

        Scaffold(
            topBar = { TopBar("Edit Address".uppercase(), TopBarNavigationType.Back(onAction = navigator::back)) },
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
                    if (state.isLoading) Loader(modifier = Modifier.matchParentSize())
                }
            },
            backgroundColor = Color.Porcelain
        )
    }
}