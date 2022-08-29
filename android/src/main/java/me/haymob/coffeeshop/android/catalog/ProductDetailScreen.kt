package me.haymob.coffeeshop.android.catalog

import androidx.compose.foundation.layout.*
import androidx.compose.material.Button
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import me.haymob.coffeeshop.android.R
import me.haymob.coffeeshop.android.components.TopBar
import me.haymob.coffeeshop.android.navigation.Navigator

@Composable
fun ProductDetailScreen(productId: String, navigator: Navigator) {
    Scaffold(
        topBar = { TopBar(title = "Detail") },
        content = { padding ->
            Box(modifier = Modifier.padding(padding)) {
                Button(onClick = navigator::back) {
                    Text(text = "Back")
                }
            }
        },
        backgroundColor = colorResource(id = R.color.purple_700)
    )
}