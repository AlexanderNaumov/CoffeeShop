package me.haymob.weakref

import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

external class WeakRef<T>(target: T) {
    fun deref(): T?
}

actual class Weak<T: Any> actual constructor(value: T): ReadOnlyProperty<Any?, T?> {
    private var wref = WeakRef(value)
    override fun getValue(thisRef:Any? , property: KProperty<*>): T? {
        return wref.deref()
    }
    actual fun get(): T? = wref.deref()
}