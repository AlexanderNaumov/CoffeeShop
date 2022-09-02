package me.haymob.coffeeshop.android.components

import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.Text
import androidx.compose.material.TopAppBar
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.sp

sealed class TopBarType {
    class Back(val onAction: () -> Unit): TopBarType()
    object None: TopBarType()
}

@Composable
fun TopBar(title: String, type: TopBarType) {
    TopAppBar(
        title = { Text(text = title, fontSize = 18.sp) },
        navigationIcon = {
            when (type) {
                is TopBarType.Back -> {
                    IconButton(onClick = type.onAction) {
                        Icon(
                            imageVector = Icons.Filled.ArrowBack,
                            contentDescription = null
                        )
                    }
                }
                else -> {}
            }
        },
        backgroundColor = Color.White,
        contentColor = Color.Black
    )
}