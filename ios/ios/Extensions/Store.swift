import SwiftUI
import core
import Combine

func getStore<_State: core.State, Effect: AnyObject, _Store: Store<_State, Effect>>(params: [Any] = []) -> _Store {
    CoreKt.app.koin.get(type: _Store.self, params: params) as! _Store
}

func statePublisher<S: core.State, E: AnyObject>(_ store: Store<S, E>) -> FlowPublisher<S> {
    FlowPublisher(wrapper: store.stateFlow())
}

func effectPublisher<S: core.State, E: AnyObject>(_ store: Store<S, E>) -> FlowPublisher<E> {
    FlowPublisher(wrapper: store.effectFlow())
}
