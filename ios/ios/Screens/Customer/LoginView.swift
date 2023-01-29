import SwiftUI
import Router
import core

struct LoginView: View {
    @EnvironmentObject private var navigator: Navigator
    private let store: LoginUIStore
    @UIState private var state: LoginUIState
    
    init(store: LoginUIStore = getStore()) {
        self.store = store
        state = store.currentState
    }
    
    var body: some View {
        ZStack {
            VStack(spacing: 18) {
                ForEach(state.fields) { field in
                    InputTextField(field: field) { value in
                        store.updateField(type: field.type, value: value)
                    }
                }
                Button("Login") {
                    store.login()
                }
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .background(Color.porcelain)
            .navigationTitle("Login".uppercased())
            .navigationBarItems(leading: Button {
                navigator.back()
            } label: {
                Image("close")
            })
            if state.isLoading {
                FullScreenLoader()
            }
        }
        .bind(store, state: $state)
        .onEffect(store) { effect in
            switch effect {
            case let error as LoginUIEffect.Error:
                navigator.navigate("error/\(error.message.toBase64())")
            case is LoginUIEffect.Successes:
                navigator.back()
            default:
                break
            }
        }
    }
}
