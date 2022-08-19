package me.haymob.coffeeshop.store

import kotlinx.coroutines.flow.*
import kotlinx.coroutines.*
import me.haymob.multiplatformannotations._JsExport

@_JsExport
abstract class Store<StoreState: State, StoreEffect>(initialState: StoreState) {

    internal val scope = CoroutineScope(Dispatchers.Unconfined + Job())

    private val _state = MutableStateFlow(initialState)
    val state = _state.asStateFlow()
    val currentState
    get() = state.value

    var didSetState: ((StoreState) -> Unit)? = null
    var didSetEffect: ((StoreEffect) -> Unit)? = null

    fun setState(reduce: StoreState.() -> StoreState) {
        scope.launch {
            val newState = currentState.reduce()
            _state.emit(newState)
            didSetState?.invoke(newState)
        }
    }

    fun onState(didSetState: (StoreState) -> Unit) {
        this.didSetState = didSetState
    }

    private val _effect = MutableSharedFlow<StoreEffect>()
    val effect = _effect.asSharedFlow()

    fun setEffect(effect: StoreEffect) {
        scope.launch {
            _effect.emit(effect)
            didSetEffect?.invoke(effect)
        }
    }

    fun onEffect(didSetEffect: (StoreEffect) -> Unit) {
        this.didSetEffect = didSetEffect
    }

    fun destroy() {
        scope.cancel()
    }
}