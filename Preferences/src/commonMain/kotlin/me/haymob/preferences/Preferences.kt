package me.haymob.preferences

 expect object Preferences {
    fun setInt(key: String, value: Int)
    fun getInt(key: String): Int?

    fun setFloat(key: String, value: Float)
    fun getFloat(key: String): Float?

    fun setString(key: String, value: String)
    fun getString(key: String): String?

    fun setBoolean(key: String, value: Boolean)
    fun getBoolean(key: String): Boolean?

    fun removeValue(key: String)
}