package me.haymob.coffeeshop.android.customer

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.navigation.NavHostController
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.*
import me.haymob.coffeeshop.app
import me.haymob.coffeeshop.ui.customer.order.detail.OrderDetailUIStore
import me.haymob.coffeeshop.ui.customer.order.detail.actions.reorder
import org.koin.core.parameter.ParametersHolder

fun orderDetailScreen(
    navController: NavHostController,
    orderId: String,
    store: OrderDetailUIStore = app.koin.get {
        ParametersHolder(
            _values = mutableListOf(orderId)
        )
    }
): @Composable () -> Unit = {
    val state = store.state.collectAsState().value
    val order = state.order
    if (order != null) {
        Scaffold(
            topBar = {
                TopBar(
                    "#${order.id}",
                    TopBarNavigationType.Back(onAction = navController::popBackStack)
                )
            },
            backgroundColor = Color.Porcelain
        ) { padding ->
            Box(
                Modifier
                    .padding(padding)
                    .fillMaxSize()
            ) {
                Column(Modifier.fillMaxSize()) {
                    Column(
                        Modifier
                            .fillMaxSize()
                            .weight(1.0f)
                            .verticalScroll(rememberScrollState())
                    ) {
                        OrderDetailSection("Payment Method", order.paymentMethod.title)
                        OrderDetailSection("Shipping Method", order.shippingMethod.title)
                        OrderDetailSection(
                            "Address",
                            "${order.address.firstName} ${order.address.lastName}\n${order.address.city}, ${order.address.street}, ${order.address.postcode}"
                        )
                        OrderSectionTitle("Items")
                        order.products.map { product ->
                            OrderItemCell(product)
                        }
                        OrderTotalCell(order.totalPrice)
                    }

                    LargeButton(
                        "Reorder",
                        Color.Green
                    ) {
                        store.reorder()
                    }
                }

                if (state.isLoading) Loader(Modifier.matchParentSize())
            }
        }
    }
}