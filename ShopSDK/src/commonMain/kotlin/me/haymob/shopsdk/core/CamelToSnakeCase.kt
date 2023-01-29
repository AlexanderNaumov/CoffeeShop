package me.haymob.shopsdk.core

internal fun String.camelToSnakeCase() = "(?<=[a-zA-Z])[A-Z]".toRegex().replace(this) {
    "_${it.value.replaceFirstChar(Char::lowercase)}"
}