package me.haymob.coffeeshopsdk.core

import kotlinx.serialization.*
import kotlinx.serialization.json.*

internal class GQLResult {
    @Serializable
    private data class QueryContainer(val query: String)

    val stringBuilder = StringBuilder()

    fun queryString() = stringBuilder.toString().replace("\n\n", "\n")
    fun jsonString() = Json.encodeToString(QueryContainer(queryString()))
}

private fun <V> resultWithType(type: String, builder: Field<V>.() -> Unit) = GQLResult().apply {
    stringBuilder.append("$type {\n")
    val field = Field<V>()
    field.spacer = 1
    field.stringBuilder = stringBuilder
    field.keyEncodingStrategy = KeyEncodingStrategy.None
    field.builder()
    stringBuilder.append("}\n")
}

internal fun <V> mutation(builder: Field<V>.() -> Unit) = resultWithType("mutation", builder)
internal fun <V> query(builder: Field<V>.() -> Unit) = resultWithType("query", builder)