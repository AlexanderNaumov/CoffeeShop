package me.haymob.shop.android.screens.customer

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
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
import androidx.navigation.NavHostController
import com.google.accompanist.swiperefresh.SwipeRefresh
import com.google.accompanist.swiperefresh.rememberSwipeRefreshState
import me.haymob.shop.android.extensions.Porcelain
import me.haymob.shop.android.components.TopBar
import me.haymob.shop.android.components.TopBarNavigationType
import me.haymob.shop.android.extensions.date
import me.haymob.shop.android.navigation.NavigationItem
import me.haymob.shop.app
import me.haymob.shop.ui.customer.order.OrderListUIStore
import me.haymob.shop.ui.customer.order.actions.refreshOrders
import java.text.DateFormat

fun orderListScreen(
    navController: NavHostController,
    store: OrderListUIStore = app.koin.get()
): @Composable () -> Unit = {
    val state = store.state.collectAsState().value
    val orders = state.orders.sortedByDescending { it.date }

    Scaffold(
        topBar = {
            TopBar(
                "Orders".uppercase(),
                TopBarNavigationType.Back(onAction = navController::popBackStack)
            )
        },
        backgroundColor = Color.Porcelain
    ) { _ ->
        SwipeRefresh(
            state = rememberSwipeRefreshState(isRefreshing = state.isRefreshing),
            onRefresh = { store.refreshOrders() }
        ) {
            LazyColumn(Modifier.fillMaxSize()) {
                items(items = orders, { it.id }) { order ->
                    Column {
                        TextButton(
                            onClick = {
                                navController.navigate(
                                    NavigationItem.OrderDetail.route(
                                        order.id
                                    )
                                )
                            },
                            colors = ButtonDefaults.buttonColors(
                                contentColor = Color.Black,
                                backgroundColor = Color.White
                            )
                        ) {
                            Row(
                                verticalAlignment = Alignment.CenterVertically,
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .height(60.dp)
                            ) {
                                Text(
                                    "# ${order.id}",
                                    fontSize = 17.sp,
                                    fontWeight = FontWeight.Bold
                                )
                                val date = order.date?.let {
                                    DateFormat.getDateInstance().format(it)
                                }
                                Spacer(Modifier.weight(1.0f))
                                if (date != null) Text(
                                    "$date",
                                    fontSize = 17.sp,
                                    modifier = Modifier.padding(end = 8.dp)
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

}