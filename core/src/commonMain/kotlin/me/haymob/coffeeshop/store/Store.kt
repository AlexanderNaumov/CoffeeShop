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

    var didSetState: (() -> Unit)? = null
    var didSetEffect: ((StoreEffect) -> Unit)? = null

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
            didSetEffect?.invoke(effect)
        }
    }

    fun onEffect(didSetEffect: (StoreEffect) -> Unit) {
        this.didSetEffect = didSetEffect
    }

    fun onState(didSetState: () -> Unit) {
        this.didSetState = didSetState
    }
}