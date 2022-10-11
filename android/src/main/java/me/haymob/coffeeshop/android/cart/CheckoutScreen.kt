package me.haymob.coffeeshop.android.cart

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowForwardIos
import androidx.compose.material.icons.filled.CheckBox
import androidx.compose.material.icons.filled.CheckBoxOutlineBlank
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.*
import me.haymob.coffeeshop.android.extensions.string
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.ui.cart.checkout.CheckoutUIEffect
import me.haymob.coffeeshop.ui.cart.checkout.CheckoutUIStore
import me.haymob.coffeeshop.ui.cart.checkout.actions.createOrder
import me.haymob.coffeeshop.ui.cart.checkout.actions.selectPayment
import me.haymob.coffeeshop.ui.cart.checkout.actions.selectShipping
import me.haymob.coffeeshop.ui.cart.checkout.actions.setAddress

class CheckoutScreen(
    val navigator: Navigator,
    val store: CheckoutUIStore
) {
    @Composable
    fun Body() {
        val state = store.state.collectAsState().value
        val successDialog = remember { mutableStateOf<String?>(null)  }

        LaunchedEffect(key1 = Unit) {
            store.effect.collect {
                when (it) {
                    is CheckoutUIEffect.OrderSuccess -> successDialog.value = it.id
                    is CheckoutUIEffect.Error -> navigator.navigate(NavigationItem.Error.route(it.message))
                }
            }
        }

        Scaffold(
            topBar = {
                TopBar(
                    "Checkout".uppercase(),
                    TopBarNavigationType.Back(onAction = navigator::back)
                )
            },
            content = { _ ->
                if (successDialog.value != null) {
                    SuccessAlert(successDialog.value!!) {
                        successDialog.value = null
                        navigator.back()
                    }
                }

                val cart = state.cart ?: return@Scaffold
                Box(Modifier.fillMaxSize()) {
                    Column(Modifier.fillMaxSize()) {
                        LazyColumn(
                            Modifier
                                .fillMaxSize()
                                .weight(1.0f)
                        ) {
                            item { CheckoutSection("Payment Methods") }
                            items(items = cart.paymentMethods, { it.id }) { method ->
                                CheckoutCell(method.title, state.equalPaymentMethod(method)) {
                                    store.selectPayment(method)
                                }
                            }
                            item { CheckoutSection("Shipping Methods") }
                            items(items = cart.shippingMethods, { it.id }) { method ->
                                CheckoutCell(method.title, state.equalShippingMethod(method)) {
                                    store.selectShipping(method)
                                }
                            }
                            item { CheckoutSection("Address") }
                            items(items = state.addresses, { it.id }) { address ->
                                CheckoutCell(
                                    "${address.firstName} ${address.lastName}\n${address.city}, ${address.street}, ${address.postcode}",
                                    state.equalAddress(address)
                                ) {
                                    store.setAddress(address)
                                }
                            }
                            item { CheckoutSection("Items") }
                            items(items = cart.items, { it.id }) { item ->
                                Row(
                                    verticalAlignment = Alignment.CenterVertically,
                                    modifier = Modifier
                                        .background(Color.White)
                                        .padding(end = 15.dp)
                                        .height(70.dp)
                                ) {
                                    ProductImage(
                                        item.product.thumbnail,
                                        Modifier.size(50.dp, 50.dp)
                                    )
                                    Column {
                                        Text(
                                            item.product.name,
                                            fontSize = 18.sp
                                        )
                                        Text(
                                            item.product.price.string,
                                            fontSize = 18.sp,
                                            fontWeight = FontWeight.Bold
                                        )
                                    }
                                    Spacer(Modifier.weight(1.0f))
                                    Text(
                                        "${item.product.qty}x",
                                        fontSize = 18.sp
                                    )
                                }
                                Divider()
                            }
                            val totalPrice = cart.totalPrice
                            if (totalPrice != null) {
                                item {
                                    Row(
                                        modifier = Modifier
                                            .fillMaxWidth()
                                            .height(60.dp)
                                            .background(Color.White)
                                            .padding(horizontal = 10.dp),
                                        horizontalArrangement = Arrangement.SpaceBetween,
                                        verticalAlignment = Alignment.CenterVertically
                                    ) {
                                        Text(
                                            "Total",
                                            fontSize = 20.sp
                                        )
                                        Text(
                                            totalPrice.string,
                                            fontSize = 20.sp
                                        )
                                    }
                                }
                            }
                        }
                        LargeButton(
                            "Create Order",
                            if (state.isActiveOrderButton) Color.Green else Color.Black
                        ) {
                            if (state.isActiveOrderButton.not()) return@LargeButton
                            store.createOrder()
                        }
                    }
                    if (state.isLoading) Loader(Modifier.matchParentSize())
                }
            },
            backgroundColor = Color.Porcelain
        )
    }
}

@Composable
private fun CheckoutSection(text: String) {
    Row(
        verticalAlignment = Alignment.Bottom,
        modifier = Modifier
            .padding(10.dp)
            .height(30.dp)
    ) {
        Text(
            text,
            fontSize = 17.sp
        )
    }
}

@Composable
private fun CheckoutCell(title: String, checkmarkFilled: Boolean, onClick: () -> Unit) {
    Column(Modifier.background(Color.White)) {
        TextButton(
            onClick = onClick,
            colors = ButtonDefaults.buttonColors(
                contentColor = Color.Black,
                backgroundColor = Color.White
            )
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .height(50.dp)
                    .fillMaxWidth()
            ) {
                Icon(
                    if (checkmarkFilled) Icons.Default.CheckBox
                    else Icons.Default.CheckBoxOutlineBlank,
                    contentDescription = null
                )
                Text(
                    text = title,
                    fontSize = 17.sp,
                    fontWeight = FontWeight.Normal,
                    modifier = Modifier.padding(start = 8.dp)
                )
            }
        }
        Divider()
    }
}

@Composable
private fun SuccessAlert(orderId: String, onAction: () -> Unit) {
    AlertDialog(
        onDismissRequest = onAction,
        title = { Text("Success") },
        text = { Text("Order ID: $orderId)") },
        confirmButton = {
            Button(onClick = onAction) {
                Text("OK")
            }
        }
    )
}