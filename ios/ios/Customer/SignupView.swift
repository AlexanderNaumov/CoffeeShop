import SwiftUI
import core

struct SignupRoute: SwiftUIRoute {
    var body: some View { SignupView() }
    var presentationStyle: PresentationStyle { .sheet }
}

private struct SignupView: View {
    @Store private var store: SignupUIStore
    @EnvironmentObject private var router: Router
    
    private func setEffect() {
        store.onEffect { [weak router] effect in
            switch effect {
            case let error as SignupUIEffect.Error:
                router?.open(AlertRoute(alert: Alert(title: "Error", message: error.message)))
            case is SignupUIEffect.Successes:
                router?.close()
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
                    router.close()
                } label: {
                    Image("close")
                })
                if store.currentState.isLoading {
                    FullScreenLoader()
                }
            }.onAppear {
                setEffect()
            }
        }
    }
}
