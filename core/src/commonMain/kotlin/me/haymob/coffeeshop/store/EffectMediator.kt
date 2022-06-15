package me.haymob.coffeeshop.store

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch

open class EffectMediator(vararg store: Store<*, *>) {

    protected val scope = CoroutineScope(Dispatchers.Unconfined + Job())

    private val _effect = MutableSharedFlow<Any?>()
    val effect = _effect.asSharedFlow()

    init {
        store.forEach {
            scope.launch {
                it.effect.collect(_effect)
            }
        }
    }
}