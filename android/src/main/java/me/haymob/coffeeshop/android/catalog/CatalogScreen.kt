package me.haymob.coffeeshop.android.catalog

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.Button
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.sp
import me.haymob.coffeeshop.android.navigation.NavigationItem
import me.haymob.coffeeshop.android.components.TopBar
import me.haymob.coffeeshop.android.R
import me.haymob.coffeeshop.android.navigation.Navigator

@Composable
fun CatalogScreen(navigator: Navigator) {
    Scaffold(
        topBar = { TopBar(title = "Catalog") },
        content = { padding ->
            println(padding)
//            Box(modifier = Modifier.padding(padding)) {
//
//            }
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .background(colorResource(id = R.color.white))
                    .wrapContentSize(Alignment.Center)
            ) {
                Button(onClick = {
                    navigator.navigate(NavigationItem.ProductDetail.route("3213213"))
                }) {
                    Text(
                        text = "Detail",
                        color = Color.White,
                        textAlign = TextAlign.Center,
                        fontSize = 15.sp
                    )
                }
            }
        },
        backgroundColor = Color.White
    )
}