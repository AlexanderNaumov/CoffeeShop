import SwiftUI
import core

struct AccountRoute: SwiftUIRoute {
    var body: some View {
        AccountView()
    }
}

struct AccountView: View {
    @Store var store: AccountUIStore
    @ObservedObject var error = ErrorState()
    @EnvironmentObject var router: Router
    
    func setEffect() {
        store.onEffect { effect in
            switch effect {
            case let error as AccountUIEffect.Error:
                self.error.message = error.message
            case is AccountUIEffect.Successes:
                router.close()
            default:
                break
            }
        }
    }
    
    var body: some View {
        ZStack {
            VStack(spacing: 18) {
                ForEach(store.currentState.fields) { field in
                    AccountTextField(field: field) { value in
                        store.updateField(type: field.type, value: value)
                    }
                }
                Button("Update") {
                    store.updateCustomer()
                }
            }
            .errorAlert(errorState: error)
            .navigationTitle("Account".uppercased())
            if store.currentState.isLoading {
                VStack {
                    ProgressView()
                        .tint(.black)
                }
            }
        }
        .tint(.blue)
        .onAppear {
            setEffect()
        }
    }
}
