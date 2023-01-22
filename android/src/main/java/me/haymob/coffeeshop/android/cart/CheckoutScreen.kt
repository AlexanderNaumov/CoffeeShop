package me.haymob.coffeeshop.android.cart

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.navigation.NavHostController
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.*
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.app
import me.haymob.coffeeshop.ui.cart.checkout.CheckoutUIEffect
import me.haymob.coffeeshop.ui.cart.checkout.CheckoutUIStore
import me.haymob.coffeeshop.ui.cart.checkout.actions.createOrder
import me.haymob.coffeeshop.ui.cart.checkout.actions.selectPayment
import me.haymob.coffeeshop.ui.cart.checkout.actions.selectShipping
import me.haymob.coffeeshop.ui.cart.checkout.actions.setAddress

fun checkoutScreen(
    navController: NavHostController,
    store: CheckoutUIStore = app.koin.get()
): @Composable () -> Unit = {
    val state = store.state.collectAsState().value
    val successDialog = remember { mutableStateOf<String?>(null) }

    LaunchedEffect(key1 = Unit) {
        store.effect.collect {
            when (it) {
                is CheckoutUIEffect.OrderSuccess -> successDialog.value = it.id
                is CheckoutUIEffect.Error -> navController.navigate(
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
                "Checkout".uppercase(),
                TopBarNavigationType.Back(onAction = navController::popBackStack)
            )
        },
        backgroundColor = Color.Porcelain
    ) { _ ->
        if (successDialog.value != null) {
            CheckoutSuccessAlert(successDialog.value!!) {
                successDialog.value = null
                navController.popBackStack()
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
                    item { OrderSectionTitle("Payment Methods") }
                    items(items = cart.paymentMethods, { it.id }) { method ->
                        CheckoutCell(method.title, state.equalPaymentMethod(method)) {
                            store.selectPayment(method)
                        }
                    }
                    item { OrderSectionTitle("Shipping Methods") }
                    items(items = cart.shippingMethods, { it.id }) { method ->
                        CheckoutCell(method.title, state.equalShippingMethod(method)) {
                            store.selectShipping(method)
                        }
                    }
                    item { OrderSectionTitle("Address") }
                    items(items = state.addresses, { it.id }) { address ->
                        CheckoutCell(
                            "${address.firstName} ${address.lastName}\n${address.city}, ${address.street}, ${address.postcode}",
                            state.equalAddress(address)
                        ) {
                            store.setAddress(address)
                        }
                    }
                    item { OrderSectionTitle("Items") }
                    items(items = cart.items, { it.id }) { item ->
                        OrderItemCell(item.product)
                    }
                    val totalPrice = cart.totalPrice
                    if (totalPrice != null) {
                        item {
                            OrderTotalCell(totalPrice)
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
    }
}