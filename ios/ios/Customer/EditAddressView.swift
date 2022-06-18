import SwiftUI
import core

struct EditAddresRoute: Route {
    let address: Address
    var body: some View {
        EditAddresView(store: Store(wrappedValue: ios.inject(params: [address])))
    }
}

struct EditAddresView: View {
    @ObservedObject var error = ErrorState()
    @Store var store: EditAddressUIStore
    @EnvironmentObject var router: Router
    
    func setEffect() {
        store.onEffect { effect in
            switch effect {
            case let error as EditAddressUIEffect.Error:
                self.error.message = error.message
            case is EditAddressUIEffect.Successes:
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
                Button("Updare") {
                    store.updateAddress()
                }.tint(.blue)
                Button("Remove") {
                    store.removeAddress()
                }.tint(.red)
            }
            .errorAlert(errorState: error)
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
