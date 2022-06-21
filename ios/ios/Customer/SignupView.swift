import SwiftUI
import core

struct SignupRoute: SwiftUIRoute {
    var body: some View { SignupView() }
    var presentationStyle: PresentationStyle { .sheet }
}

struct SignupView: View {
    @Store var store: SignupUIStore
    @ObservedObject var error = ErrorState()
    @EnvironmentObject var router: Router
    
    func setEffect() {
        store.onEffect { effect in
            switch effect {
            case let error as SignupUIEffect.Error:
                self.error.message = error.message
            case is SignupUIEffect.Successes:
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
                    Button("Signup") {
                        store.signup()
                    }
                }
                .errorAlert(errorState: error)
                .navigationTitle("Register".uppercased())
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
