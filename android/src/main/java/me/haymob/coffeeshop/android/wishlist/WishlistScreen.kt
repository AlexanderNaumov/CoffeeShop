package me.haymob.coffeeshop.android.wishlist

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import me.haymob.coffeeshop.android.components.TopBar

@Composable
fun WishlistScreen() {
    Wishlist()
}

@Composable
private fun Wishlist() {
    Scaffold(
        topBar = { TopBar("Wishlist") },
        content = { padding ->
            Box(modifier = Modifier.padding(padding)) {

            }
        },
        backgroundColor = Color.White
    )
}