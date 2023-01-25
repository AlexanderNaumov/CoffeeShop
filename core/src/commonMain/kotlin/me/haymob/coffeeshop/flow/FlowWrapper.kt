package me.haymob.coffeeshop.flow

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onCompletion
import kotlinx.coroutines.flow.onEach

interface Cancellable {
    fun cancel()
}

class FlowWrapper<T>(source: Flow<T>) : Flow<T> by source {
    fun collect(onEach: (T) -> Unit, onCompletion: (cause: Throwable?) -> Unit): Cancellable {
        val scope = CoroutineScope(Dispatchers.Default + SupervisorJob())

        this.onEach(onEach)
            .onCompletion {
                onCompletion(it)
            }
            .launchIn(scope)

        return object : Cancellable {
            override fun cancel() {
                scope.cancel()
            }
        }
    }
}