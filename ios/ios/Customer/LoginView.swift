import SwiftUI
import core

struct LoginRoute: Route {
    var body: some View { LoginView() }
    var presentationStyle: PresentationStyle { .sheet }
}

struct LoginView: View {
    @Store var store: LoginUIStore
    @ObservedObject var error = ErrorState()
    @EnvironmentObject var router: Router
    
    func setEffect() {
        store.onEffect { effect in
            switch effect {
            case let error as LoginUIEffect.Error:
                self.error.message = error.message
            case is LoginUIEffect.Successes:
                router.close()
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
                    router.close()
                })
                if store.currentState.isLoading {
                    VStack {
                        ProgressView()
                            .tint(.black)
                    }
                }
            }.onAppear {
                setEffect()
            }
        }
    }
}
