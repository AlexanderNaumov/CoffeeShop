package me.haymob.shop.android.extensions

import me.haymob.shop.entities.Price

val Price.string: String
get() = "$value $currency"