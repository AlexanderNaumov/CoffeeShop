package me.haymob.coffeeshop.android.components

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import me.haymob.coffeeshop.android.Gallery
import me.haymob.coffeeshop.android.R
import me.haymob.coffeeshop.android.extensions.string
import me.haymob.coffeeshop.entities.Product

@Composable
fun CatalogProductItem(product: Product, onClick: () -> Unit, inc: () -> Unit, dec: () -> Unit) {
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
                ProductImage(
                    product.thumbnail,
                    Modifier
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
        if (product.isLoading) Loader(Modifier.matchParentSize())
    }
}