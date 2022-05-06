package me.haymob.coffeeshopsdk.core

internal fun String.camelToSnakeCase() = "(?<=[a-zA-Z])[A-Z]".toRegex().replace(this) {
    "_${it.value.replaceFirstChar(Char::lowercase)}"
}