package me.haymob.preferences

import android.content.Context
import android.content.SharedPreferences

actual object Preferences {
    private const val PREFERENCE_NAME = "cart_storage"
    private lateinit var sharedPreferences: SharedPreferences

    fun linkContext(context: Context) {
        sharedPreferences = context.getSharedPreferences(PREFERENCE_NAME, Context.MODE_PRIVATE)
    }

    actual fun setInt(key: String, value: Int) {
        sharedPreferences.edit().putInt(key, value).apply()
    }
    actual fun getInt(key: String): Int? = if (sharedPreferences.contains(key)) {
        sharedPreferences.getInt(key, 0)
    } else {
        null
    }


    actual fun setFloat(key: String, value: Float) {
        sharedPreferences.edit().putFloat(key, value).apply()
    }
    actual fun getFloat(key: String): Float? = if (sharedPreferences.contains(key)) {
        sharedPreferences.getFloat(key, 0f)
    } else {
        null
    }

    actual fun setString(key: String, value: String) {
        sharedPreferences.edit().putString(key, value).apply()
    }
    actual fun getString(key: String): String? = if (sharedPreferences.contains(key)) {
        sharedPreferences.getString(key, "")
    } else {
        null
    }

    actual fun setBoolean(key: String, value: Boolean) {
        sharedPreferences.edit().putBoolean(key, value).apply()
    }
    actual fun getBoolean(key: String): Boolean? = if (sharedPreferences.contains(key)) {
        sharedPreferences.getBoolean(key, false)
    } else {
        null
    }

    actual fun removeValue(key: String) {
        sharedPreferences.edit().remove(key).apply()
    }
}