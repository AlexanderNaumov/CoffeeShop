package me.haymob.coffeeshop.domain.events

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch

interface Event

open class EventEmitter<E: Event> {

    private val scope = CoroutineScope(Dispatchers.Unconfined + Job())
    private val event = MutableSharedFlow<E>()

    fun emit(e: E) {
        scope.launch {
            event.emit(e)
        }
    }

    fun subscribe(callback: (E) -> Unit) = event.onEach(callback)
}