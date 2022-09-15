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
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.google.accompanist.swiperefresh.SwipeRefresh
import com.google.accompanist.swiperefresh.rememberSwipeRefreshState
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.InputTextField
import me.haymob.coffeeshop.android.components.Loader
import me.haymob.coffeeshop.android.components.TopBar
import me.haymob.coffeeshop.android.components.TopBarNavigationType
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.ui.customer.address.list.AddressListUIStore
import me.haymob.coffeeshop.app
import me.haymob.coffeeshop.ui.customer.address.list.actions.refreshAddresses

@Composable
fun AddressListScreen(navigator: Navigator, store: AddressListUIStore = app.koin.get()) {
    AddressList(navigator, store)
}

@Composable
private fun AddressList(navigator: Navigator, store: AddressListUIStore) {
    val state = store.state.collectAsState().value

    Scaffold(
        topBar = { TopBar("Addresses".uppercase(), TopBarNavigationType.Back(onAction = navigator::back)) },
        content = { _ ->
            SwipeRefresh(
                state = rememberSwipeRefreshState(isRefreshing = state.isRefreshing),
                onRefresh = { store.refreshAddresses() }) {
                Box(modifier = Modifier.fillMaxSize()) {
                    Column(
                        modifier = Modifier
                            .fillMaxSize()
                            .verticalScroll(rememberScrollState())
                    ) {
                        Row(modifier = Modifier.padding(start = 8.dp)) {
                            TextButton(onClick = { navigator.navigate(NavigationItem.CreateAddress.route) }) {
                                Text(text = "New Address".uppercase())
                            }
                        }
                        state.addresses.map { address ->
                            Column(modifier = Modifier.background(Color.White)) {
                                TextButton(
                                    onClick = { navigator.navigate(NavigationItem.EditAddress.route(address.id)) },
                                    colors = ButtonDefaults.buttonColors(
                                        contentColor = Color.Black,
                                        backgroundColor = Color.White
                                    )
                                ) {
                                    Row(
                                        horizontalArrangement = Arrangement.SpaceBetween,
                                        verticalAlignment = Alignment.CenterVertically,
                                        modifier = Modifier
                                            .height(60.dp)
                                            .fillMaxWidth()
                                    ) {
                                        Text(
                                            text = "${address.firstName} ${address.lastName}\n${address.city}, ${address.street}, ${address.postcode}",
                                            fontSize = 17.sp,
                                            fontWeight = FontWeight.Normal,
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
                    }
                }
            }
        },
        backgroundColor = Color.Porcelain
    )
}