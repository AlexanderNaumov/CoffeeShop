package me.haymob.shop.android.screens.cart

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CheckBox
import androidx.compose.material.icons.filled.CheckBoxOutlineBlank
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
import me.haymob.shop.android.extensions.string
import me.haymob.shop.android.navigation.NavigationItem
import me.haymob.shop.app
import me.haymob.shop.ui.cart.CartUIStore
import me.haymob.shop.ui.cart.actions.*
import me.haymob.shop.android.components.*

fun cartScreen(
    navController: NavHostController,
    store: CartUIStore = app.koin.get()
): @Composable () -> Unit = {
    val state = store.state.collectAsState().value
    Scaffold(
        topBar = { TopBar("Cart".uppercase()) },
        backgroundColor = Color.Porcelain
    ) { _ ->
        val cart = state.cart
        if (cart != null && cart.items.isNotEmpty()) {
            Column(Modifier.fillMaxSize()) {
                SwipeRefresh(
                    state = rememberSwipeRefreshState(isRefreshing = state.isRefreshing),
                    onRefresh = { store.refresh() },
                    modifier = Modifier.weight(1.0f)
                ) {
                    LazyColumn(Modifier.fillMaxSize()) {
                        item {
                            Row(
                                verticalAlignment = Alignment.CenterVertically,
                                horizontalArrangement = Arrangement.SpaceBetween,
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .height(50.dp)
                                    .padding(start = 20.dp)
                            ) {
                                TextButton(
                                    onClick = { store.selectAllItems() },
                                    colors = ButtonDefaults.buttonColors(
                                        contentColor = Color.Black,
                                        backgroundColor = Color(0)
                                    )
                                ) {
                                    Icon(
                                        if (state.isSelectedAllItems) Icons.Default.CheckBox
                                        else Icons.Default.CheckBoxOutlineBlank,
                                        contentDescription = null
                                    )
                                    Text(
                                        "Select all".uppercase(),
                                        modifier = Modifier.padding(start = 6.dp)
                                    )
                                }
                                TextButton(onClick = { store.removeSelectedItems() }) {
                                    Text(
                                        "Remove selected".uppercase(),
                                        color = Color.Red
                                    )
                                }
                            }
                        }
                        items(items = cart.items, { it.id }) { item ->
                            val product = item.product
                            Box(Modifier.fillMaxSize()) {
                                Row(
                                    verticalAlignment = Alignment.CenterVertically,
                                    modifier = Modifier
                                        .background(Color.White)
                                        .padding(start = 15.dp)
                                        .clickable {
                                            navController.navigate(
                                                NavigationItem.ProductDetail.route(
                                                    product.id
                                                )
                                            )
                                        }
                                ) {
                                    IconButton(onClick = { store.selectCartItem(item) }) {
                                        Icon(
                                            if (state.itemSelected(item)) Icons.Default.CheckBox
                                            else Icons.Default.CheckBoxOutlineBlank,
                                            contentDescription = null
                                        )
                                    }
                                    ProductImage(
                                        product.thumbnail,
                                        Modifier.size(50.dp, 50.dp)
                                    )
                                    ProductInfoCell(
                                        product,
                                        inc = { store.incrementProduct(product) },
                                        dec = { store.decrementProduct(product) }
                                    )
                                }
                                if (product.isLoading) Loader(Modifier.matchParentSize())
                            }
                            Divider()
                        }
                    }
                }
                val total = cart.totalPrice
                if (total != null) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween,
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(60.dp)
                            .padding(horizontal = 20.dp)
                    ) {
                        Text(
                            "Total",
                            fontSize = 20.sp,
                            fontWeight = FontWeight.Bold
                        )
                        Text(
                            total.string,
                            fontSize = 20.sp,
                            fontWeight = FontWeight.Bold
                        )
                    }
                }
                if (state.isShowCheckoutButton) {
                    LargeButton(
                        "Checkout",
                        if (state.isActiveCheckoutButton) Color.Green else Color.Black
                    ) {
                        if (state.isActiveCheckoutButton.not()) return@LargeButton
                        navController.navigate(NavigationItem.Checkout.route())
                    }
                }
            }
        } else {
            EmptyList("Empty Cart")
        }
    }
}