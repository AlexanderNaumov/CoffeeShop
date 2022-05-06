package me.haymob.coffeeshopsdk.core

import kotlinx.coroutines.flow.*
import kotlinx.serialization.*
import kotlinx.serialization.json.*

@Serializable
internal data class DataContainer<T>(
    val data: T? = null,
    val errors: List<JsonObject>? = null
)

internal data class DecodeResult<T>(
    val value: T?,
    val error: String?
)

internal inline fun <reified T> Flow<String>.decode(): Flow<DecodeResult<T>> = map { str ->
    val container = Json.decodeFromString<DataContainer<T>>(str)
    val error = container.errors?.map { it["message"]?.toString() }?.joinToString(separator = "\n\n") ?: "invalid ${T::class.simpleName!!}"
    DecodeResult(container.data, error)
}

internal inline fun <T, V> Flow<DecodeResult<T>>.tryMap(crossinline transform: (T) -> V?): Flow<V> = map {
    it.value?.let(transform) ?: throw Exception(it.error)
}