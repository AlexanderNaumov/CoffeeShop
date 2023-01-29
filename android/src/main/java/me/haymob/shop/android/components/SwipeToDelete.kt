package me.haymob.shop.android.components

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import me.haymob.shop.android.extensions.Porcelain

@ExperimentalMaterialApi
@Composable
fun SwipeToDelete(onDelete: () -> Unit, content: @Composable () -> Unit) {
    val dismissState = rememberDismissState(confirmStateChange = {
        if (it == DismissValue.DismissedToStart) onDelete()
        true
    })
    SwipeToDismiss(
        dismissState,
        directions = setOf(DismissDirection.EndToStart),
        dismissThresholds = { direction ->
            FractionalThreshold(if (direction == DismissDirection.EndToStart) 0.1f else 0.05f)
        },
        background = {
            Loader(
                Modifier.fillMaxSize(),
                Color.LightGray,
                Color.Porcelain
            )
        },
        dismissContent = { content() }
    )
}