package me.haymob.shop.android.extensions

import me.haymob.shop.entities.Order
import java.text.SimpleDateFormat
import java.util.*

val Order.date: Date?
    get() = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.US).parse(createdAt)