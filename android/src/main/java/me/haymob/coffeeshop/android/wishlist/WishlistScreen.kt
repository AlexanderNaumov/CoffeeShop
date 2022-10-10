package me.haymob.coffeeshop.android.wishlist

import androidx.compose.foundation.background
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
import androidx.compose.ui.unit.sp
import com.google.accompanist.swiperefresh.SwipeRefresh
import com.google.accompanist.swiperefresh.rememberSwipeRefreshState
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.*
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.ui.customer.wishlist.WishlistUIStore
import me.haymob.coffeeshop.ui.customer.wishlist.actions.decrementProduct
import me.haymob.coffeeshop.ui.customer.wishlist.actions.incrementProduct
import me.haymob.coffeeshop.ui.customer.wishlist.actions.refreshWishlist
import me.haymob.coffeeshop.ui.customer.wishlist.actions.removeProductFromWishlist

class WishlistScreen(
    val navigator: Navigator,
    val store: WishlistUIStore
) {
    @ExperimentalMaterialApi
    @Composable
    fun Body() {
        val state = store.state.collectAsState().value

        Scaffold(
            topBar = { TopBar("Wishlist") },
            content = { _ ->
                if (state.wishlist.isNotEmpty()) {
                    SwipeRefresh(
                        state = rememberSwipeRefreshState(isRefreshing = state.isRefreshing),
                        onRefresh = { store.refreshWishlist() }
                    ) {
                        LazyColumn(modifier = Modifier.fillMaxSize()) {
                            items(items = state.wishlist, { it.id }) { product ->
                                Box(modifier = Modifier.fillMaxSize()) {
                                    SwipeToDelete(onDelete = { store.removeProductFromWishlist(product) }) {
                                        Row(
                                            verticalAlignment = Alignment.CenterVertically,
                                            modifier = Modifier
                                                .background(Color.White)
                                                .padding(start = 15.dp)
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

                                    if (product.isLoading) Loader(modifier = Modifier.matchParentSize())
                                }
                                Divider()
                            }
                        }
                    }
                } else {
                    EmptyList("Empty Wishlist")
                }
            },
            backgroundColor = Color.Porcelain
        )
    }
}