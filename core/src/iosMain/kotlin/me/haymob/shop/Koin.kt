package me.haymob.shop

import kotlinx.cinterop.*
import org.koin.core.Koin
import org.koin.core.parameter.ParametersHolder

fun <T: Any> Koin.get(type: ObjCClass) = get<T>(getOriginalKotlinClass(type)!!, null)
fun <T: Any> Koin.get(type: ObjCClass, params: List<Any?>) = get<T>(getOriginalKotlinClass(type)!!, null) {
    ParametersHolder(_values = params.toMutableList())
}