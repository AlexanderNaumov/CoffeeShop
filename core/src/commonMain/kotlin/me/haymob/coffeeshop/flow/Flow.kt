package me.haymob.coffeeshop.flow

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.onEach

fun <T>Flow<T>.onResult(result: (Result<T>) -> Unit) = catch {
    result(Result.failure(it))
}.onEach {
    result(Result.success(it))
}