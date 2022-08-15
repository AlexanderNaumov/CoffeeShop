package me.haymob.weakref

import java.lang.ref.WeakReference
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

actual class Weak<T: Any> actual constructor(value: T): ReadOnlyProperty<Any?, T?> {
    private var wref = WeakReference(value)
    override fun getValue(thisRef:Any? , property: KProperty<*>): T? = wref.get()
    actual fun get(): T? = wref.get()
}