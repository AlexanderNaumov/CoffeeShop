package me.haymob.coffeeshop

import kotlinx.cinterop.*
import org.koin.core.Koin

fun <T: Any> Koin.get(type: ObjCClass) = get<T>(getOriginalKotlinClass(type)!!, null)