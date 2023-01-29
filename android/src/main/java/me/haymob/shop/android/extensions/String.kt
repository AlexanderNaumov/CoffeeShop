package me.haymob.shop.android.extensions

import android.util.Base64

fun String.toBase64String(): String {
    return Base64.encodeToString(toByteArray(), Base64.DEFAULT)
}
fun String.fromBase64String() = String(Base64.decode(this, Base64.DEFAULT))