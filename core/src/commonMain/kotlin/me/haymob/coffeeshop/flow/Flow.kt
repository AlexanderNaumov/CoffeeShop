package me.haymob.coffeeshop.flow

import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

fun <T> Flow<T>.onResult(result: (Result<T>) -> Unit) = catch {
    result(Result.failure(it))
}.onEach {
    result(Result.success(it))
}