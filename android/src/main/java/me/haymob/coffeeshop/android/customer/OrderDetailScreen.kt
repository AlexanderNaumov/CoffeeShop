package me.haymob.coffeeshop.android.customer

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Divider
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.*
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.ui.cart.checkout.actions.createOrder
import me.haymob.coffeeshop.ui.customer.order.detail.OrderDetailUIStore
import me.haymob.coffeeshop.ui.customer.order.detail.actions.reorder

class OrderDetailScreen(
    val navigator: Navigator,
    val store: OrderDetailUIStore
) {
    @Composable
    fun Body() {
        val state = store.state.collectAsState().value
        val order = state.order ?: return
        Scaffold(
            topBar = { TopBar("#${order.id}", TopBarNavigationType.Back(onAction = navigator::back)) },
            content = { padding ->
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
            },
            backgroundColor = Color.Porcelain
        )
    }
}

@Composable
private fun OrderDetailSection(title: String, content: String) {
    OrderSectionTitle(title)
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier
            .fillMaxWidth()
            .height(70.dp)
            .background(Color.White)
    ) {
        Text(
            text = content,
            fontSize = 17.sp,
            fontWeight = FontWeight.Normal,
            modifier = Modifier.padding(start = 10.dp)
        )
    }
    Divider()
}