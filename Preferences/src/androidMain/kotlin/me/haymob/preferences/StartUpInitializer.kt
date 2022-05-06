package me.haymob.preferences

import android.content.Context
import androidx.startup.Initializer

class StartUpInitializer : Initializer<Int> {

    override fun create(context: Context): Int {
        Preferences.linkContext(context)
        return 0
    }

    override fun dependencies(): List<Class<out Initializer<*>>> = emptyList()
}