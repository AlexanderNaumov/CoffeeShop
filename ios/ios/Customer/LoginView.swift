import SwiftUI
import core

final class AlertState: ObservableObject {
    @Published var activeError: String?
    
    var isPresentingAlert: Binding<Bool> {
        return Binding<Bool>(get: {
            return self.activeError != nil
        }, set: { newValue in
            guard !newValue else { return }
            self.activeError = nil
        })
    }
}

struct LoginView: View {
    @Store var store: LoginUIStore
    @ObservedObject var alertStaet = AlertState()
    @Binding var router: Routing?

    init(router: Binding<Routing?>) {
        _router = router
        setEffect()
    }
    
    func setEffect() {
        store.onEffect { effect in
            switch effect {
            case let error as LoginUIEffect.Error:
                alertStaet.activeError = error.message
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
                        TextFieldOnAction(
                            placeholder: field.type.description(),
                            value: field.value
                        ) { value in
                            store.updateField(type: field.type, value: value)
                        }
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .padding(EdgeInsets(top: 0, leading: 15, bottom: 0, trailing: 15))
                        if let error = field.error {
                            Text(error).foregroundColor(.red)
                        }
                    }
                    Button("Login") {
                        store.login()
                    }
                }
                .alert(isPresented: alertStaet.isPresentingAlert, content: {
                    Alert(title: Text("Error"), message: alertStaet.activeError.map(Text.init), dismissButton: nil)
                })
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
