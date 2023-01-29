package me.haymob.shop.android.components

import androidx.compose.material.AlertDialog
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController

@Composable
fun ErrorAlert(navController: NavHostController, message: String) {
    AlertDialog(
        onDismissRequest = { navController.popBackStack() },
        title = { Text("Error") },
        text = { Text(message) },
        confirmButton = {
            Button(onClick = { navController.popBackStack() }) {
                Text("OK")
            }
        }
    )
}