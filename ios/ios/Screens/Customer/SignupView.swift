import SwiftUI
import Router
import core

struct SignupView: View {
    @EnvironmentObject private var navigator: Navigator
    private let store: SignupUIStore
    @UIState private var state: SignupUIState
    
    init(store: SignupUIStore = getStore()) {
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
                Button("Signup") {
                    store.signup()
                }
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .background(Color.porcelain)
            .navigationTitle("Register".uppercased())
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
            case let error as SignupUIEffect.Error:
                navigator.navigate("error/\(error.message.toBase64())")
            case is SignupUIEffect.Successes:
                navigator.back()
            default:
                break
            }
        }
    }
}
