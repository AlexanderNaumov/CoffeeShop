package me.haymob.coffeeshop.store

import kotlinx.coroutines.flow.*
import kotlinx.coroutines.*
import me.haymob.coffeeshop.flow.FlowWrapper
import me.haymob.multiplatformannotations._JsExport

@_JsExport
abstract class Store<StoreState : State, StoreEffect>(initialState: StoreState) {

    internal val scope = CoroutineScope(Dispatchers.Default + Job())

    private val _state = MutableStateFlow(initialState)
    val state = _state.asStateFlow()
    val currentState
        get() = state.value

    fun setState(reduce: StoreState.() -> StoreState) {
        scope.launch {
            val newState = state.value.reduce()
            _state.emit(newState)
        }
    }

    fun stateFlow() = FlowWrapper(state)

    private val _effect = MutableSharedFlow<StoreEffect>()
    val effect = _effect.asSharedFlow()

    fun setEffect(effect: StoreEffect) {
        scope.launch {
            _effect.emit(effect)
        }
    }

    fun effectFlow() = FlowWrapper(effect)

    fun destroy() {
        scope.cancel()
    }

}