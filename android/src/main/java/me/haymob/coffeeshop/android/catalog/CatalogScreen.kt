package me.haymob.coffeeshop.android.catalog

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.rememberAsyncImagePainter
import com.google.accompanist.swiperefresh.SwipeRefresh
import com.google.accompanist.swiperefresh.rememberSwipeRefreshState
import me.haymob.coffeeshop.android.Gallery
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.extensions.string
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.app
import me.haymob.coffeeshop.entities.Product
import me.haymob.coffeeshop.ui.catalog.CatalogUIStore
import me.haymob.coffeeshop.ui.catalog.actions.decrementProduct
import me.haymob.coffeeshop.ui.catalog.actions.incrementProduct
import me.haymob.coffeeshop.android.R
import me.haymob.coffeeshop.android.components.*
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.ui.catalog.actions.refreshCatalog

@Composable
fun CatalogScreen(navigator: Navigator, store: CatalogUIStore = app.koin.get()) {
    Scaffold(
        topBar = { TopBar("Coffee".uppercase(), TopBarType.None) },
        content = { _ ->

            val state = store.state.collectAsState().value
            val products = state.categories.flatMap { it.products }

            SwipeRefresh(
                state = rememberSwipeRefreshState(isRefreshing = state.isRefreshing),
                onRefresh = { store.refreshCatalog() }) {
                LazyVerticalGrid(
                    columns = GridCells.Fixed(2),
                    contentPadding = PaddingValues(10.dp)
                ) {
                    items(products.size) { index ->
                        val product = products[index]
                        ProductItem(
                            product,
                            onClick = { navigator.navigate(NavigationItem.ProductDetail.route(product.id)) },
                            inc = { store.incrementProduct(product) },
                            dec = { store.decrementProduct(product) }
                        )
                    }
                }
            }
        },
        backgroundColor = Color.Porcelain
    )
}

@Composable
private fun ProductItem(product: Product, onClick: () -> Unit, inc: () -> Unit, dec: () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .padding(10.dp)
            .clip(RoundedCornerShape(20.dp))
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(2.dp),
            modifier = Modifier
                .clickable(onClick = onClick)
                .background(Color.White)
        ) {
            Column(
                modifier = Modifier
                    .padding(8.dp)
                    .clip(RoundedCornerShape(20.dp))
                    .background(Color.Gallery)
            ) {
                Image(
                    painter = rememberAsyncImagePainter(product.thumbnail),
                    contentDescription = null,
                    modifier = Modifier
                        .padding(12.dp)
                        .fillMaxWidth()
                        .aspectRatio(1.0f)
                )
            }
            Text(
                product.name,
                textAlign = TextAlign.Center,
                fontSize = 17.sp
            )
            Text(
                product.price.string,
                fontWeight = FontWeight.Bold,
                textAlign = TextAlign.Center,
                fontSize = 17.sp
            )
            if (product.qty == 0) {
                ActionButton(R.drawable.ic_plus, 60.dp, inc)
            } else {
                ActionButtons(product.qty, inc = inc, dec = dec)
            }
        }
        if (product.isLoading) ProductLoader(modifier = Modifier.matchParentSize())
    }
}