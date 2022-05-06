import SwiftUI
import core

extension core.Store: ObservableObject {}

func inject<_State: core.State, Effect, _Store: core.Store<_State, Effect>>() -> _Store {
    let store = CoreKt.app.koin.get(type: _Store.self) as! _Store
    store.didSetState = { [weak store] in
        store?.objectWillChange.send()
    }
    return store
}


@propertyWrapper struct Store<_State: core.State, Effect, _Store: core.Store<_State, Effect>>: DynamicProperty {
    @ObservedObject private(set) var wrappedValue: _Store
    init() {
        wrappedValue = inject()
    }
}
