package me.haymob.coffeeshop.android.customer

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import me.haymob.coffeeshop.android.components.TopBar
import me.haymob.coffeeshop.android.components.TopBarType

@Composable
fun CustomerScreen() {
    Scaffold(
        topBar = { TopBar("Customer", TopBarType.None) },
        content = { padding ->
            Box(modifier = Modifier.padding(padding)) {

            }
        },
        backgroundColor = Color.White
    )
}