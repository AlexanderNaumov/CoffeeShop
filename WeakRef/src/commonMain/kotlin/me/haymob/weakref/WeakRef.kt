package me.haymob.weakref

import kotlin.properties.ReadOnlyProperty

expect class Weak<T: Any>(value: T): ReadOnlyProperty<Any?, T?> {
    fun get(): T?
}

fun <T: Any> weak(value: T) = Weak(value)