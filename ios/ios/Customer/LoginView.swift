import SwiftUI
import core

struct LoginRoute: SwiftUIRoute {
    var body: some View { LoginView() }
    var presentationStyle: PresentationStyle { .sheet }
}

private struct LoginView: View {
    @Store private var store: LoginUIStore
    @EnvironmentObject private var router: Router
    
    private func setEffect() {
        store.onEffect { [weak router] effect in
            switch effect {
            case let error as LoginUIEffect.Error:
                router?.open(AlertRoute(alert: Alert(title: "Error", message: error.message)))
            case is LoginUIEffect.Successes:
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
                    Button("Login") {
                        store.login()
                    }
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .background(Color.porcelain)
                .navigationTitle("Login".uppercased())
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
