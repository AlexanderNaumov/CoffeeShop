package me.haymob.coffeeshop.domain.mediators

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch
import me.haymob.coffeeshop.store.Store

open class EffectMediator(vararg store: Store<*, *>) {

    protected val scope = CoroutineScope(Dispatchers.Unconfined + Job())

    private val _effect = MutableSharedFlow<Any?>()
    val effect = _effect.asSharedFlow()

    init {
        scope.launch {
            store.forEach {
                it.effect.collect(_effect)
            }
        }
    }
}