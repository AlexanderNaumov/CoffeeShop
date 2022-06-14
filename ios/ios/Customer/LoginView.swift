import SwiftUI
import core

struct LoginView: View {
    @Store var store: LoginUIStore
    @ObservedObject var error = ErrorState()
    @Binding var router: Routing?

    init(router: Binding<Routing?>) {
        _router = router
        setEffect()
    }
    
    func setEffect() {
        store.onEffect { effect in
            switch effect {
            case let error as LoginUIEffect.Error:
                self.error.message = error.message
            case is LoginUIEffect.Successes:
                router = nil
            default:
                break
            }
        }
    }
    
    var body: some View {
        NavigationView {
            ZStack {
                VStack(spacing: 18) {
                    ForEach(store.currentState.fields) { field in
                        AccountTextField(field: field) { value in
                            store.updateField(type: field.type, value: value)
                        }
                    }
                    Button("Login") {
                        store.login()
                    }
                }
                .errorAlert(errorState: error)
                .navigationTitle("Login".uppercased())
                .navigationBarItems(leading: Button("X") {
                    router = nil
                })
                if store.currentState.isLoading {
                    VStack {
                        ProgressView()
                            .tint(.black)
                    }
                }
            }
        }
    }
}
