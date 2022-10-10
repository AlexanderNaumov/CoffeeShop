package me.haymob.coffeeshop.android.catalog

import androidx.compose.foundation.Image
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
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import coil.compose.rememberAsyncImagePainter
import coil.request.CachePolicy
import coil.request.ImageRequest
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.R
import me.haymob.coffeeshop.android.components.*
import me.haymob.coffeeshop.android.extensions.string
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.ui.productDetail.ProductDetailUIStore
import me.haymob.coffeeshop.ui.productDetail.actions.addProductToWishlist
import me.haymob.coffeeshop.ui.productDetail.actions.decrementProduct
import me.haymob.coffeeshop.ui.productDetail.actions.incrementProduct
import me.haymob.coffeeshop.ui.productDetail.actions.removeProductFromWishlist

class ProductDetailScreen(
    val navigator: Navigator,
    val store: ProductDetailUIStore
) {
    @Composable
    fun Body() {
        val state = store.state.collectAsState().value
        val product = state.product ?: return

        Scaffold(
            topBar = {
                TopBar(
                    product.name.uppercase(),
                    TopBarNavigationType.Back(onAction = navigator::back),
                    if (product.isOnWishlist) {
                        TopBarActionType.Button(
                            Icons.Filled.Favorite,
                            onAction = { store.removeProductFromWishlist() }
                        )
                    } else {
                        TopBarActionType.Button(
                            Icons.Filled.FavoriteBorder,
                            onAction = { store.addProductToWishlist() }
                        )
                    }
                )
            },
            content = { _ ->
                Column(modifier = Modifier.verticalScroll(rememberScrollState())) {
                    Box(
                        modifier = Modifier
                            .aspectRatio(320f / 240)
                    ) {
                        ProductImage(
                            product.thumbnail,
                            Modifier
                                .padding(12.dp)
                                .fillMaxSize()
                        )
                        if (product.isLoading) Loader(modifier = Modifier.matchParentSize())
                    }
                    ProductInfoCell(
                        product,
                        inc = { store.incrementProduct() },
                        dec = { store.decrementProduct() }
                    )
                    Divider()
                    Column(
                        modifier = Modifier
                            .background(Color.White)
                            .padding(10.dp)
                    ) {
                        InfoBlock("Body", "${product.body}")
                        InfoBlock("Roast", "${product.roast}")
                        InfoBlock("Acidity", "${product.acidity}")
                        Text(
                            text = product.description,
                            fontSize = 18.sp,
                            modifier = Modifier.padding(vertical = 8.dp)
                        )
                    }
                }
            },
            backgroundColor = Color.Porcelain
        )
    }
}

@Composable
private fun InfoBlock(title: String, content: String) {
    Row(
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier
            .height(50.dp)
            .fillMaxWidth()
    ) {
        Text(
            text = title,
            fontSize = 18.sp
        )
        Text(
            text = content,
            fontSize = 18.sp,
            fontWeight = FontWeight.Bold
        )
    }
    Divider()
}