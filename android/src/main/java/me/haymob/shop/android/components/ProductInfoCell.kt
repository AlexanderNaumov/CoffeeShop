package me.haymob.shop.android.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import me.haymob.shop.android.R
import me.haymob.shop.android.extensions.string
import me.haymob.shop.entities.Product

@Composable
fun ProductInfoCell(variant: Product.Variant, inc: () -> Unit, dec: () -> Unit) {
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
                variant.name,
                fontSize = 18.sp
            )
            Text(
                variant.price.string,
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold
            )
        }
        if (variant.qty == 0) {
            ActionButton(R.drawable.ic_plus, 60.dp, onClick = inc)
        } else {
            ActionButtons(variant.qty, inc = inc, dec = dec)
        }
    }
}