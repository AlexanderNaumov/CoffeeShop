package me.haymob.preferences

import platform.Foundation.NSUserDefaults

actual object Preferences {
    private const val PREFERENCE_NAME = "cart_storage"
    private val userDefault = NSUserDefaults(suiteName = PREFERENCE_NAME)

    actual fun setInt(key: String, value: Int) {
        userDefault.apply {
            setInteger(value.toLong(), key)
            synchronize()
        }
    }

    actual fun getInt(key: String): Int? = (userDefault.objectForKey(key) as? Long)?.toInt()


    actual fun setFloat(key: String, value: Float) {
        userDefault.apply {
            setFloat(value, key)
            synchronize()
        }
    }
    actual fun getFloat(key: String): Float? = userDefault.objectForKey(key) as? Float

    actual fun setString(key: String, value: String) {
        userDefault.apply {
            setObject(value, key)
            synchronize()
        }
    }
    actual fun getString(key: String): String? = userDefault.objectForKey(key) as? String

    actual fun setBoolean(key: String, value: Boolean) {
        userDefault.apply {
            setBool(value, key)
            synchronize()
        }
    }
    actual fun getBoolean(key: String): Boolean? = userDefault.objectForKey(key) as? Boolean

    actual fun removeValue(key: String) {
        userDefault.removeObjectForKey(key)
    }
}