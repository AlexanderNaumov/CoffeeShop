import SwiftUI
import core

struct SignupView: View {
    
    @Store var store: SignupUIStore
    @ObservedObject var error = ErrorState()
    @Binding var router: Routing?
    
    init(router: Binding<Routing?>) {
        _router = router
        setEffect()
    }
    
    func setEffect() {
        store.onEffect { effect in
            switch effect {
            case let error as SignupUIEffect.Error:
                self.error.message = error.message
            case is SignupUIEffect.Successes:
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
                    Button("Signup") {
                        store.signup()
                    }
                }
                .errorAlert(errorState: error)
                .navigationTitle("Register".uppercased())
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
