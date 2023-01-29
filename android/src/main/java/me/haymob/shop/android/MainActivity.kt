package me.haymob.shop.android

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material.*
import me.haymob.shop.coreInit
import me.haymob.shop.startApp
import me.haymob.shop.android.screens.MainScreen

private var isCreate = false

@ExperimentalMaterialApi
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (isCreate.not()) {
            isCreate = true

            coreInit()
            startApp()
        }

        setContent {
            MainScreen()
        }
    }
}