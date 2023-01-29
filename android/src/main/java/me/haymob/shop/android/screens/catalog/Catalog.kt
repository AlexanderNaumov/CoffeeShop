package me.haymob.shop.android.screens.catalog

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.material.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.google.accompanist.swiperefresh.SwipeRefresh
import com.google.accompanist.swiperefresh.rememberSwipeRefreshState
import me.haymob.shop.android.extensions.Porcelain
import me.haymob.shop.ui.catalog.CatalogUIStore
import me.haymob.shop.ui.catalog.actions.decrementProduct
import me.haymob.shop.ui.catalog.actions.incrementProduct
import me.haymob.shop.android.navigation.NavigationItem
import me.haymob.shop.app
import me.haymob.shop.ui.catalog.actions.refreshCatalog
import me.haymob.shop.android.components.CatalogProductItem
import me.haymob.shop.android.components.TopBar

fun catalogScreen(
    navController: NavHostController,
    store: CatalogUIStore = app.koin.get()
): @Composable () -> Unit = {
    val state = store.state.collectAsState().value
    val products = state.categories.flatMap { it.products }
    Scaffold(
        topBar = { TopBar("Coffee".uppercase()) },
        backgroundColor = Color.Porcelain
    ) { _ ->
        SwipeRefresh(
            state = rememberSwipeRefreshState(isRefreshing = state.isRefreshing),
            onRefresh = { store.refreshCatalog() }
        ) {
            LazyVerticalGrid(
                columns = GridCells.Fixed(2),
                contentPadding = PaddingValues(10.dp)
            ) {
                items(items = products, key = { it.id }) { product ->
                    CatalogProductItem(
                        product,
                        onClick = {
                            navController.navigate(
                                NavigationItem.ProductDetail.route(
                                    product.id
                                )
                            )
                        },
                        inc = { store.incrementProduct(product) },
                        dec = { store.decrementProduct(product) }
                    )
                }
            }
        }
    }
}