package me.haymob.coffeeshop.android

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material.*
import me.haymob.coffeeshop.coreInit
import me.haymob.coffeeshop.startApp

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