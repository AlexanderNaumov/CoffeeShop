package me.haymob.shop.android.components

import androidx.compose.foundation.layout.padding
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.Icon
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp

@Composable
fun IconButtonWithBackground(imageVector: ImageVector, enabled: Boolean, onClick: () -> Unit) {
    Button(
        onClick = onClick,
        enabled = enabled,
        colors = ButtonDefaults.buttonColors(
            backgroundColor = Color.Gray,
            contentColor = Color.White
        )
    ) {
        Icon(
            imageVector,
            contentDescription = null,
            modifier = Modifier.padding(start = 5.dp)
        )
    }
}