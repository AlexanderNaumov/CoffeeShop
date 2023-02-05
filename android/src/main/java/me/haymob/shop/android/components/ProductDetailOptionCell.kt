package me.haymob.shop.android.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.material.Divider
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun ProductDetailOptionCell(title: String, content: String) {
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