package me.haymob.coffeeshop.android.components

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.FloatingActionButton
import androidx.compose.material.Icon
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import me.haymob.coffeeshop.android.Gallery
import me.haymob.coffeeshop.android.R

@Composable
fun ActionButtons(qty: Int, width: Dp = 40.dp, inc: () -> Unit, dec: () -> Unit) {
    Row {
        ActionButton(R.drawable.ic_minus, width, dec)
        Text(
            "$qty",
            fontSize = 18.sp,
            modifier = Modifier.padding(vertical = 8.dp)
        )
        ActionButton(R.drawable.ic_plus, width, inc)
    }
}

@Composable
fun ActionButton(image: Int, width: Dp, onClick: () -> Unit) {
    FloatingActionButton(
        onClick = onClick,
        backgroundColor = Color.Gallery,
        shape = RoundedCornerShape(6.dp),
        modifier = Modifier
            .padding(10.dp)
            .size(width, 20.dp)
    ) {
        Icon(
            painter = painterResource(image),
            contentDescription = null
        )
    }
}