package me.haymob.shop.android.screens.catalog

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.FavoriteBorder
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.google.accompanist.pager.ExperimentalPagerApi
import me.haymob.shop.android.extensions.Porcelain
import me.haymob.shop.app
import me.haymob.shop.ui.productDetail.ProductDetailUIStore
import me.haymob.shop.android.components.*
import me.haymob.shop.ui.productDetail.actions.*
import org.koin.core.parameter.ParametersHolder

@Composable
@ExperimentalPagerApi
fun ProductDetail(
    navController: NavHostController,
    productId: String,
    store: ProductDetailUIStore = remember {
        app.koin.get { ParametersHolder(_values = mutableListOf(productId)) }
    }
) {
    val state = store.state.collectAsState().value
    val product = state.product
    val variant = state.currentVariant

    if (product != null && variant != null) {
        Scaffold(
            topBar = {
                TopBar(
                    product.name.uppercase(),
                    TopBarNavigationType.Back(onAction = navController::popBackStack),
                    if (state.isShowWishlist) {
                        if (product.isOnWishlist) {
                            TopBarActionType.Button(Icons.Filled.Favorite, onAction = { store.removeProductFromWishlist() })
                        } else {
                            TopBarActionType.Button(Icons.Filled.FavoriteBorder, onAction = { store.addProductToWishlist() })
                        }
                    } else {
                        TopBarActionType.None
                    }
                )
            }, backgroundColor = Color.Porcelain
        ) { _ ->
            Column(Modifier.verticalScroll(rememberScrollState())) {
                Box(Modifier.aspectRatio(320f / 240)) {
                    ProductImages(product.images)
                    if (product.isLoading) Loader(Modifier.matchParentSize())
                }
                ProductDetailInfoCell(
                    product.variants,
                    state.selectedOption,
                    selectVariant = { store.selectOption(it) },
                    inc = { store.incrementProduct() },
                    dec = { store.decrementProduct() }
                )
                Divider()
                Column(
                    modifier = Modifier
                        .background(Color.White)
                        .padding(horizontal = 12.dp)
                ) {
                    variant.options.forEach {
                        ProductDetailOptionCell(it.groupName.replaceFirstChar(Char::titlecase), it.name)
                    }
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