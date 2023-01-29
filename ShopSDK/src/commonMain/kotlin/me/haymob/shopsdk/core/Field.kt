package me.haymob.shopsdk.core


import me.haymob.multiplatformannotations._JvmName
import kotlin.reflect.KProperty1

internal enum class KeyEncodingStrategy {
    None, FromCamelCase
}

internal class Field<T> {
    var stringBuilder: StringBuilder? = null
    var builder: (() -> Unit)? = null
    var spacer: Int = 0
    var keyEncodingStrategy: KeyEncodingStrategy = KeyEncodingStrategy.None

    @_JvmName("field1")
    fun field(p: KProperty1<T, String?>) {
        field<String>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    @_JvmName("field2")
    fun field(p: KProperty1<T, Int?>) {
        field<Int>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    @_JvmName("field3")
    fun field(p: KProperty1<T, Boolean?>, vararg args: Arg) {
        field<Boolean>(stringBuilder!!, p.name, spacer, keyEncodingStrategy, args = args)
    }

    @_JvmName("field4")
    fun field(p: KProperty1<T, Double?>) {
        field<Double>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    @_JvmName("field5")
    fun <V> field(p: KProperty1<T, V?>) where V: GQLObject {
        field<V>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    @_JvmName("field6")
    fun <V> field(p: KProperty1<T, V?>, vararg args: Arg, builder: Field<V>.() -> Unit) where V: GQLObject {
        field(stringBuilder!!, p.name, spacer, keyEncodingStrategy, args = args, builder = builder)
    }

    @_JvmName("field7")
    fun <V> field(p: KProperty1<T, V?>, field: Field<V>, vararg args: Arg) where V: GQLObject {
        field(stringBuilder!!, p.name, spacer, keyEncodingStrategy, args = args, field = field)
    }

    fun <V> on(name: String, vararg args: Arg, builder: Field<V>.() -> Unit) where V: GQLObject {
        field(stringBuilder!!, "... on $name", spacer, KeyEncodingStrategy.None, args, builder = builder)
    }

    @_JvmName("field8")
    fun <V> field(p: KProperty1<T, V?>) where V: List<String?> {
        field<String>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    @_JvmName("field9")
    fun <V> field(p: KProperty1<T, V?>) where V: List<Int?> {
        field<Int>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    @_JvmName("field10")
    fun <V> field(p: KProperty1<T, V?>) where V: List<Boolean?> {
        field<Boolean>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    @_JvmName("field11")
    fun <V> field(p: KProperty1<T, V?>) where V: List<Double?> {
        field<Double>(stringBuilder!!, p.name, spacer, keyEncodingStrategy)
    }

    @_JvmName("field12")
    fun <V, E> field(p: KProperty1<T, V?>, vararg args: Arg, builder: Field<E>.() -> Unit) where E: GQLObject, V: List<E?> {
        field(stringBuilder!!, p.name, spacer, keyEncodingStrategy, args = args, builder = builder)
    }

    @_JvmName("field13")
    fun <V, E> field(p: KProperty1<T, V?>, field: Field<E>, vararg args: Arg) where E: GQLObject, V: List<E?> {
        field(stringBuilder!!, p.name, spacer, keyEncodingStrategy, args = args, field = field)
    }
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