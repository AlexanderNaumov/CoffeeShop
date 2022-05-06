package me.haymob.coffeeshopsdk.core

import kotlin.reflect.KProperty1

internal actual class Field<T> {
    actual var stringBuilder: StringBuilder? = null
    actual var builder: (() -> Unit)? = null
    actual var spacer: Int = 0
    actual var keyEncodingStrategy: KeyEncodingStrategy = KeyEncodingStrategy.None

    actual fun field(p: KProperty1<T, String?>) {
        field<String>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    actual fun field(p: KProperty1<T, Int?>) {
        field<Int>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    actual fun field(p: KProperty1<T, Boolean?>, vararg args: Arg) {
        field<Boolean>(stringBuilder!!, p.name, spacer, keyEncodingStrategy, args = args)
    }

    actual fun field(p: KProperty1<T, Double?>) {
        field<Double>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    actual fun <V> field(p: KProperty1<T, V?>) where V: GQLObject {
        field<V>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    actual fun <V> field(p: KProperty1<T, V?>, vararg args: Arg, builder: Field<V>.() -> Unit) where V: GQLObject {
        field(stringBuilder!!, p.name, spacer, keyEncodingStrategy, args = args, builder = builder)
    }

    actual fun <V> field(p: KProperty1<T, V?>, field: Field<V>, vararg args: Arg) where V: GQLObject {
        field(stringBuilder!!, p.name, spacer, keyEncodingStrategy, args = args, field = field)
    }

    actual fun <V> on(name: String, vararg args: Arg, builder: Field<V>.() -> Unit) where V: GQLObject {
        field(stringBuilder!!, "... on $name", spacer, KeyEncodingStrategy.None, args, builder = builder)
    }

    actual fun <V> field(p: KProperty1<T, V?>) where V: List<String?> {
        field<String>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    actual fun <V> field(p: KProperty1<T, V?>) where V: List<Int?> {
        field<Int>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    actual fun <V> field(p: KProperty1<T, V?>) where V: List<Boolean?> {
        field<Boolean>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    actual fun <V> field(p: KProperty1<T, V?>) where V: List<Double?> {
        field<Double>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    actual fun <V, E> field(p: KProperty1<T, V?>, vararg args: Arg, builder: Field<E>.() -> Unit) where E: GQLObject, V: List<E?> {
        field(stringBuilder!!, p.name, spacer, keyEncodingStrategy, args = args, builder = builder)
    }

    actual fun <V, E> field(p: KProperty1<T, V?>, field: Field<E>, vararg args: Arg) where E: GQLObject, V: List<E?> {
        field(stringBuilder!!, p.name, spacer, keyEncodingStrategy, args = args, field = field)
    }
}