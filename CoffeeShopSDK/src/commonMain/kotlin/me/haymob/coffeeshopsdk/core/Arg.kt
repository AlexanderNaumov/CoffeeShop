package me.haymob.coffeeshopsdk.core

internal data class Arg(val key: String, val value: Any) {
    override fun toString(): String {
        return "$key: ${mapValue(value)}"
    }
}

private fun mapValue(value: Any, includeArg: Boolean = true): String = when {
    value is String -> "\"$value\""
    value is Arg && includeArg -> "{$value}"
    value is ArgsList -> "{${value.list.joinToString(separator = ", ") { mapValue(it, false) } }}"
    value is List<*> -> "[${value.joinToString(separator = ", ") { mapValue(it!!) } }]"
    else -> "$value"
}

internal infix fun String.of(value: Any) = Arg(this, value)

internal data class ArgsList(val list: List<Arg>)
internal data class ArgEnum(val value: String) {
    override fun toString() = value
}

internal fun argsOf(vararg args: Arg) = ArgsList(args.toList())

internal fun argsOf(args: List<Arg>) = ArgsList(args)