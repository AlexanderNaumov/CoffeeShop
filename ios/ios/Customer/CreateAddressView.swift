import SwiftUI
import core

struct CreateAddressRoute: Route {
    var body: some View {
        CreateAddressView()
    }
}

struct CreateAddressView: View {
    @ObservedObject var error = ErrorState()
    @Store var store: CreateAddressUIStore
    @EnvironmentObject var router: Router
    
    func setEffect() {
        store.onEffect { effect in
            switch effect {
            case let error as CreateAddressUIEffect.Error:
                self.error.message = error.message
            case is CreateAddressUIEffect.Successes:
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
                Button("Create") {
                    store.createAddress()
                }.tint(.blue)
            }
            .errorAlert(errorState: error)
            .navigationTitle("New Address".uppercased())
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
