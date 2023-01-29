package me.haymob.shop.android.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.Divider
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import me.haymob.shop.android.extensions.string
import me.haymob.shop.entities.Product

@Composable
fun OrderItemCell(product: Product) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier
            .background(Color.White)
            .padding(end = 15.dp)
            .height(70.dp)
    ) {
        ProductImage(
            product.thumbnail,
            Modifier.size(50.dp, 50.dp)
        )
        Column {
            Text(
                product.name,
                fontSize = 18.sp
            )
            Text(
                product.price.string,
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold
            )
        }
        Spacer(Modifier.weight(1.0f))
        Text(
            "${product.qty}x",
            fontSize = 18.sp
        )
    }
    Divider()
}