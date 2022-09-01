package me.haymob.coffeeshop.android.components

import androidx.compose.material.Text
import androidx.compose.material.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.sp

@Composable
fun TopBar(title: String) {
    TopAppBar(
        title = { Text(text = title, fontSize = 18.sp) },
        backgroundColor = Color.White,
        contentColor = Color.Black
    )
}