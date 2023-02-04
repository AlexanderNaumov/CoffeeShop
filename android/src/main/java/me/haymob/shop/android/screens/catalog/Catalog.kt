package me.haymob.shop.android.screens.catalog

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.google.accompanist.pager.ExperimentalPagerApi
import com.google.accompanist.pager.HorizontalPager
import com.google.accompanist.pager.rememberPagerState
import com.google.accompanist.swiperefresh.SwipeRefresh
import com.google.accompanist.swiperefresh.rememberSwipeRefreshState
import me.haymob.shop.android.components.CategoryTabs
import me.haymob.shop.android.components.ProductListItem
import me.haymob.shop.android.components.TopBar
import me.haymob.shop.android.extensions.Porcelain
import me.haymob.shop.android.navigation.NavigationItem
import me.haymob.shop.ui.catalog.CatalogUIStore
import me.haymob.shop.app
import me.haymob.shop.ui.catalog.actions.decrementProduct
import me.haymob.shop.ui.catalog.actions.incrementProduct
import me.haymob.shop.ui.catalog.actions.refreshCatalog

@Composable
@ExperimentalPagerApi
fun Catalog(
    navController: NavHostController,
    store: CatalogUIStore = remember {
        app.koin.get()
    }
) {
    val state = store.state.collectAsState().value
    val pagerState = rememberPagerState()
    val categories = state.categories

    Scaffold(
        topBar = { TopBar("Shop") },
        backgroundColor = Color.Porcelain
    ) { _ ->
        Column(modifier = Modifier.fillMaxSize()) {
            CategoryTabs(categories, pagerState)
            SwipeRefresh(
                state = rememberSwipeRefreshState(isRefreshing = state.isRefreshing),
                onRefresh = { store.refreshCatalog() },
                modifier = Modifier.weight(1.0f)
            ) {
                HorizontalPager(categories.count(), state = pagerState) { page ->
                    LazyVerticalGrid(
                        columns = GridCells.Fixed(2),
                        contentPadding = PaddingValues(10.dp)
                    ) {
                        categories[page].child.forEach { category ->
                            item(span = { GridItemSpan(maxLineSpan) }) {
                                Text(
                                    category.name,
                                    fontSize = 18.sp,
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .padding(horizontal = 20.dp)
                                )
                            }
                            val products = category.products
                            items(items = products, key = { it.id }) { product ->
                                ProductListItem(
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
        }
    }
}