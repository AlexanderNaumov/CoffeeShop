package me.haymob.coffeeshop.android.components

import androidx.compose.material.AlertDialog
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import me.haymob.coffeeshop.android.navigation.Navigator

@Composable
fun ErrorAlert(message: String, navigator: Navigator) {
    AlertDialog(
        onDismissRequest = { navigator.back() },
        title = { Text(text = "Error") },
        text = { Text(message) },
        confirmButton = {
            Button(onClick = { navigator.back() }) {
                Text("OK")
            }
        }
    )
}