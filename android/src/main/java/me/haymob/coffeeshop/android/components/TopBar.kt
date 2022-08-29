package me.haymob.coffeeshop.android.components

import androidx.compose.material.Text
import androidx.compose.material.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.unit.sp
import me.haymob.coffeeshop.android.R

@Composable
fun TopBar(title: String) {
    TopAppBar(
        title = { Text(text = title, fontSize = 18.sp) },
        backgroundColor = colorResource(id = R.color.purple_700),
        contentColor = Color.White
    )
}