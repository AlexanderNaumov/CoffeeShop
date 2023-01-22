package me.haymob.coffeeshop.android.catalog

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Divider
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.FavoriteBorder
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.components.*
import me.haymob.coffeeshop.app
import me.haymob.coffeeshop.ui.productDetail.ProductDetailUIStore
import me.haymob.coffeeshop.ui.productDetail.actions.addProductToWishlist
import me.haymob.coffeeshop.ui.productDetail.actions.decrementProduct
import me.haymob.coffeeshop.ui.productDetail.actions.incrementProduct
import me.haymob.coffeeshop.ui.productDetail.actions.removeProductFromWishlist
import org.koin.core.parameter.ParametersHolder

fun productDetailScreen(
    navController: NavHostController,
    productId: String,
    store: ProductDetailUIStore = app.koin.get { ParametersHolder(_values = mutableListOf(productId)) }
): @Composable () -> Unit = {
    val state = store.state.collectAsState().value
    val product = state.product
    if (product != null) {
        Scaffold(
            topBar = {
                TopBar(
                    product.name.uppercase(),
                    TopBarNavigationType.Back(onAction = navController::popBackStack),
                    if (product.isOnWishlist) {
                        TopBarActionType.Button(Icons.Filled.Favorite,
                            onAction = { store.removeProductFromWishlist() }
                        )
                    } else {
                        TopBarActionType.Button(Icons.Filled.FavoriteBorder,
                            onAction = { store.addProductToWishlist() }
                        )
                    }
                )
            }, backgroundColor = Color.Porcelain
        ) { _ ->
            Column(Modifier.verticalScroll(rememberScrollState())) {
                Box(Modifier.aspectRatio(320f / 240)) {
                    ProductImage(
                        product.thumbnail,
                        Modifier
                            .padding(12.dp)
                            .fillMaxSize()
                    )
                    if (product.isLoading) Loader(Modifier.matchParentSize())
                }
                ProductInfoCell(product,
                    inc = { store.incrementProduct() },
                    dec = { store.decrementProduct() })
                Divider()
                Column(
                    modifier = Modifier
                        .background(Color.White)
                        .padding(10.dp)
                ) {
                    ProductDetailInfoBlock("Body", "${product.body}")
                    ProductDetailInfoBlock("Roast", "${product.roast}")
                    ProductDetailInfoBlock("Acidity", "${product.acidity}")
                    Text(
                        text = product.description,
                        fontSize = 18.sp,
                        modifier = Modifier.padding(vertical = 8.dp)
                    )
                }
            }
        }
    }
}