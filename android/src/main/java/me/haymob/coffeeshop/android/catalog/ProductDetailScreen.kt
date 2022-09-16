package me.haymob.coffeeshop.android.catalog

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Divider
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.rememberAsyncImagePainter
import me.haymob.coffeeshop.android.Porcelain
import me.haymob.coffeeshop.android.R
import me.haymob.coffeeshop.android.components.*
import me.haymob.coffeeshop.android.extensions.string
import me.haymob.coffeeshop.android.navigation.Navigator
import me.haymob.coffeeshop.ui.productDetail.ProductDetailUIStore
import me.haymob.coffeeshop.ui.productDetail.actions.decrementProduct
import me.haymob.coffeeshop.ui.productDetail.actions.incrementProduct

class ProductDetailScreen(
    val navigator: Navigator,
    val store: ProductDetailUIStore
) {
    @Composable
    fun Body() {
        val state = store.state.collectAsState().value
        val product = state.product ?: return

        Scaffold(
            topBar = { TopBar(product.name.uppercase(), TopBarNavigationType.Back(onAction = navigator::back)) },
            content = { _ ->
                Column(modifier = Modifier.verticalScroll(rememberScrollState())) {
                    Box(
                        modifier = Modifier
                            .aspectRatio(320f / 240)
                    ) {
                        Image(
                            painter = rememberAsyncImagePainter(product.thumbnail),
                            contentDescription = null,
                            modifier = Modifier
                                .padding(12.dp)
                                .fillMaxSize()
                        )
                        if (product.isLoading) Loader(modifier = Modifier.matchParentSize())
                    }
                    Row(
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically,
                        modifier = Modifier
                            .height(60.dp)
                            .fillMaxWidth()
                            .background(Color.White)
                            .padding(start = 15.dp)
                    ) {
                        Column {
                            Text(
                                text = product.name,
                                fontSize = 18.sp
                            )
                            Text(
                                text = product.price.string,
                                fontSize = 18.sp,
                                fontWeight = FontWeight.Bold
                            )
                        }
                        if (product.qty == 0) {
                            ActionButton(R.drawable.ic_plus, 60.dp, onClick = {
                                store.incrementProduct()
                            })
                        } else {
                            ActionButtons(
                                product.qty,
                                inc = { store.incrementProduct() },
                                dec = { store.decrementProduct() }
                            )
                        }
                    }
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