package me.haymob.coffeeshop.store

import kotlinx.coroutines.flow.*
import kotlinx.coroutines.channels.*
import kotlinx.coroutines.*

abstract class Store<StoreState: State, StoreEffect>(initialState: StoreState) {

    internal val scope = CoroutineScope(Dispatchers.Unconfined + Job())

    private val _state = MutableStateFlow(initialState)
    val state = _state.asStateFlow()
    val currentState
    get() = state.value

    var didSetState: (() -> Unit)? = null

    fun setState(reduce: StoreState.() -> StoreState) {
        _state.value = currentState.reduce()
        didSetState?.invoke()
    }

    private val _effect = Channel<StoreEffect>()
    val effect = _effect.receiveAsFlow()

    fun setEffect(effect: StoreEffect) {
        scope.launch {
            _effect.send(effect)
        }
    }
}