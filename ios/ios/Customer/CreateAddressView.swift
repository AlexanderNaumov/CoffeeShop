import SwiftUI
import core

struct CreateAddressRoute: SwiftUIRoute {
    var body: some View {
        CreateAddressView()
    }
    var title: String? {
        "New Address".uppercased()
    }
}

struct CreateAddressView: View {
    @Store var store: CreateAddressUIStore
    @EnvironmentObject var router: Router
    
    func setEffect() {
        store.onEffect { [weak router] effect in
            switch effect {
            case let error as CreateAddressUIEffect.Error:
                router?.open(AlertRoute(alert: Alert(title: "Error", message: error.message)))
            case is CreateAddressUIEffect.Successes:
                router?.close()
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
            if store.currentState.isLoading {
                FullScreenLoader()
            }
        }.onAppear {
            setEffect()
        }
    }
}
