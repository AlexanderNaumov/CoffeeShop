package me.haymob.shop.flow

import kotlinx.coroutines.flow.*

fun <T> Flow<T>.onResult(result: (Result<T>) -> Unit) = catch {
    result(Result.failure(it))
}.onEach {
    result(Result.success(it))
}