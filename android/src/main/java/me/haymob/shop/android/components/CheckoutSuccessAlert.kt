package me.haymob.shop.android.components

import androidx.compose.material.AlertDialog
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable

@Composable
fun CheckoutSuccessAlert(orderId: String, onAction: () -> Unit) {
    AlertDialog(
        onDismissRequest = onAction,
        title = { Text("Success") },
        text = { Text("Order ID: $orderId)") },
        confirmButton = {
            Button(onClick = onAction) {
                Text("OK")
            }
        }
    )
}