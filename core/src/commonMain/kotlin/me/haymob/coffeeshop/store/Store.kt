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
    private var _onEffect: ((StoreEffect) -> Unit)? = null

    fun setState(reduce: StoreState.() -> StoreState) {
        scope.launch {
            _state.emit(currentState.reduce())
            didSetState?.invoke()
        }
    }

    private val _effect = MutableSharedFlow<StoreEffect>()
    val effect = _effect.asSharedFlow()

    fun setEffect(effect: StoreEffect) {
        scope.launch {
            _effect.emit(effect)
            _onEffect?.invoke(effect)
        }
    }

    fun onEffect(effect: (StoreEffect) -> Unit) {
        _onEffect = effect
    }
}