import SwiftUI
import core

struct EditAddresRoute: SwiftUIRoute {
    let address: Address
    var body: some View {
        EditAddresView(store: Store(wrappedValue: ios.inject(params: [address])))
    }
}

struct EditAddresView: View {
    @Store var store: EditAddressUIStore
    @EnvironmentObject var router: Router
    
    func setEffect() {
        store.onEffect { [weak router] effect in
            switch effect {
            case let error as EditAddressUIEffect.Error:
                router?.open(AlertRoute(alert: Alert(title: "Error", message: error.message)))
            case is EditAddressUIEffect.Successes:
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
                Button("Updare") {
                    store.updateAddress()
                }.tint(.blue)
                Button("Remove") {
                    store.removeAddress()
                }.tint(.red)
            }
            .navigationTitle("Edit Address".uppercased())
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
