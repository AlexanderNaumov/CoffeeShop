import SwiftUI
import core

typealias UIState = SwiftUI.State

extension View {
    @ViewBuilder func bind<S: core.State, E: AnyObject>(_ store: Store<S, E>, state: Binding<S>) -> some View {
        onReceive(statePublisher(store)) {
            state.wrappedValue = $0
        }
    }
    
    @ViewBuilder func onEffect<S: core.State, E: AnyObject>(_ store: Store<S, E>, action: @escaping (E) -> Void) -> some View {
        onReceive(effectPublisher(store), perform: action)
    }
}
