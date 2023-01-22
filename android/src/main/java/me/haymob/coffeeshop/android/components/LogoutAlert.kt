package me.haymob.coffeeshop.android.components

import androidx.compose.material.AlertDialog
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable

@Composable
fun LogoutAlert(onLogout: () -> Unit, onCancel: () -> Unit) {
    AlertDialog(
        onDismissRequest = onCancel,
        title = { Text("Logout") },
        text = { Text("Do you want to leave?") },
        confirmButton = {
            Button(onClick = onLogout) {
                Text("Logout")
            }
        },
        dismissButton = {
            Button(onClick = onCancel) {
                Text("Cancel")
            }
        }
    )
}