import SwiftUI
import core

struct EditAddresScreen: View {
    let address: Address
    @Binding var showEditAddress: Bool
    var body: some View {
        EditAddresView(store: Store(wrappedValue: ios.inject(params: [address])), showEditAddress: $showEditAddress)
    }
}

struct EditAddresView: View {
    @ObservedObject var error = ErrorState()
    @Store var store: EditAddressUIStore
    @Binding var showEditAddress: Bool
    
    func setEffect() {
        store.onEffect { effect in
            switch effect {
            case let error as EditAddressUIEffect.Error:
                self.error.message = error.message
            case is EditAddressUIEffect.Successes:
                showEditAddress = false
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
