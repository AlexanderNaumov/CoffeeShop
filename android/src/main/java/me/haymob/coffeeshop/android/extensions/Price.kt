package me.haymob.coffeeshop.android.extensions

import me.haymob.coffeeshop.entities.Price

val Price.string: String
get() = "$value $currency"