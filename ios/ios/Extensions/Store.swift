import SwiftUI
import core

extension core.Store: ObservableObject {}

func inject<_State: core.State, Effect, _Store: core.Store<_State, Effect>>(params: [Any] = []) -> _Store {
    let store = CoreKt.app.koin.get(type: _Store.self, params: params) as! _Store
    store.didSetState = { [weak store] _ in
        DispatchQueue.main.async {
            store?.objectWillChange.send()
        }
    }
    return store
}

@propertyWrapper struct Store<_State: core.State, Effect, _Store: core.Store<_State, Effect>>: DynamicProperty {
    @ObservedObject var wrappedValue: _Store
    init(wrappedValue: _Store) {
        self.wrappedValue = wrappedValue
    }
    init() {
        wrappedValue = inject()
    }
}
