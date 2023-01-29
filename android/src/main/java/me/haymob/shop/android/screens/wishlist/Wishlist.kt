package me.haymob.shop.android.screens.wishlist

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.google.accompanist.swiperefresh.SwipeRefresh
import com.google.accompanist.swiperefresh.rememberSwipeRefreshState
import me.haymob.shop.android.extensions.Porcelain
import me.haymob.shop.android.navigation.NavigationItem
import me.haymob.shop.app
import me.haymob.shop.ui.customer.wishlist.WishlistUIStore
import me.haymob.shop.ui.customer.wishlist.actions.decrementProduct
import me.haymob.shop.ui.customer.wishlist.actions.incrementProduct
import me.haymob.shop.ui.customer.wishlist.actions.refreshWishlist
import me.haymob.shop.ui.customer.wishlist.actions.removeProductFromWishlist
import me.haymob.shop.android.components.*

@ExperimentalMaterialApi
fun wishlistScreen(
    navController: NavHostController,
    store: WishlistUIStore = app.koin.get()
): @Composable () -> Unit = {
    val state = store.state.collectAsState().value
    Scaffold(
        topBar = { TopBar("Wishlist".uppercase()) },
        backgroundColor = Color.Porcelain
    ) { _ ->
        if (state.wishlist.isNotEmpty()) {
            SwipeRefresh(
                state = rememberSwipeRefreshState(isRefreshing = state.isRefreshing),
                onRefresh = { store.refreshWishlist() }
            ) {
                LazyColumn(Modifier.fillMaxSize()) {
                    items(items = state.wishlist, { it.id }) { product ->
                        Box(Modifier.fillMaxSize()) {
                            SwipeToDelete(onDelete = { store.removeProductFromWishlist(product) }) {
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
                            }

                            if (product.isLoading) Loader(Modifier.matchParentSize())
                        }
                        Divider()
                    }
                }
            }
        } else {
            EmptyList("Empty Wishlist")
        }
    }
}