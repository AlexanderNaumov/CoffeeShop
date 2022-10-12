package me.haymob.coffeeshop.android.extensions

import me.haymob.coffeeshop.entities.Order
import java.text.SimpleDateFormat
import java.time.LocalDate
import java.util.*

val Order.date: Date?
    get() = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.US).parse(createdAt)