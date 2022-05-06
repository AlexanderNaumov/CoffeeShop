package me.haymob.coffeeshopsdk.core

import kotlin.reflect.KProperty1

internal enum class KeyEncodingStrategy {
    None, FromCamelCase
}

internal expect class Field<T>() {
    var stringBuilder: StringBuilder?
    var builder: (() -> Unit)?
    var spacer: Int
    var keyEncodingStrategy: KeyEncodingStrategy

    fun field(p: KProperty1<T, String?>)
    fun field(p: KProperty1<T, Int?>)
    fun field(p: KProperty1<T, Boolean?>, vararg args: Arg)
    fun field(p: KProperty1<T, Double?>)
    fun <V> field(p: KProperty1<T, V?>) where V: GQLObject
    fun <V> field(p: KProperty1<T, V?>, vararg args: Arg, builder: Field<V>.() -> Unit) where V: GQLObject
    fun <V> field(p: KProperty1<T, V?>, field: Field<V>, vararg args: Arg) where V: GQLObject

    fun <V> on(name: String, vararg args: Arg, builder: Field<V>.() -> Unit) where V: GQLObject

    fun <V> field(p: KProperty1<T, V?>) where V: List<String?>
    fun <V> field(p: KProperty1<T, V?>) where V: List<Int?>
    fun <V> field(p: KProperty1<T, V?>) where V: List<Boolean?>
    fun <V> field(p: KProperty1<T, V?>) where V: List<Double?>
    fun <V, E> field(p: KProperty1<T, V?>, vararg args: Arg, builder: Field<E>.() -> Unit) where E: GQLObject, V: List<E?>
    fun <V, E> field(p: KProperty1<T, V?>, field: Field<E>, vararg args: Arg) where E: GQLObject, V: List<E?>
}

internal fun <T> field(
    stringBuilder: StringBuilder,
    name: String,
    spacer: Int,
    keyEncodingStrategy: KeyEncodingStrategy,
    args: Array<out Arg>? = null,
    field: Field<T>? = null,
    builder: (Field<T>.() -> Unit)? = null
) {
    val space = (0..spacer).joinToString(separator = "  ", transform = { "" })
    var _name = name
    if (keyEncodingStrategy == KeyEncodingStrategy.FromCamelCase) {
        _name = _name.camelToSnakeCase()
    }
    stringBuilder.append("${space}${_name}")
    if (args != null && args.isNotEmpty()) {
        stringBuilder.append("(${args.joinToString(separator = ", ")})")
    }
    if (builder == null && field == null) {
        stringBuilder.append("\n")
        return
    }
    stringBuilder.append(" {\n")
    val newField = field ?: Field<T>()
    newField.stringBuilder = stringBuilder
    newField.spacer = spacer + 1
    if (builder != null) {
        newField.builder()
    } else {
        newField.builder?.invoke()
    }
    stringBuilder.append("\n${space}}\n")
}

internal fun <T> field(builder: Field<T>.() -> Unit): Field<T> {
    val field = Field<T>()
    field.builder = { field.builder() }
    return field
}