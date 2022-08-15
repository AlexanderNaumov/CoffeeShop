package me.haymob.coffeeshop.flow

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.onEach
import me.haymob.weakref.weak

fun <T>Flow<T>.onResult(result: (Result<T>) -> Unit) = catch {
    result(Result.failure(it))
}.onEach {
    result(Result.success(it))
}

fun <T, O: Any>Flow<T>.withUnretained(obj: O, onEach: (O, T) -> Unit): Flow<T> {
    val weakObj by weak(obj)
    return this.onEach {
        if (weakObj != null) {
            onEach(weakObj!!, it)
        }
    }
}