package me.haymob.preferences

import kotlinx.browser.localStorage
import org.w3c.dom.set

actual object Preferences {
    actual fun setInt(key: String, value: Int) {
        localStorage[key] = value.toString()
    }
    actual fun getInt(key: String): Int? {
        return localStorage.getItem(key)?.toIntOrNull()
    }

    actual fun setFloat(key: String, value: Float) {
        localStorage[key] = value.toString()
    }
    actual fun getFloat(key: String): Float? {
        return localStorage.getItem(key)?.toFloatOrNull()
    }

    actual fun setString(key: String, value: String) {
        localStorage[key] = value
    }
    actual fun getString(key: String): String? {
        return localStorage.getItem(key)
    }

    actual fun setBoolean(key: String, value: Boolean) {
        localStorage[key] = value.toString()
    }
    actual fun getBoolean(key: String): Boolean? {
        return localStorage.getItem(key)?.toBooleanStrictOrNull()
    }

    actual fun removeValue(key: String) {
        localStorage.removeItem(key)
    }
}