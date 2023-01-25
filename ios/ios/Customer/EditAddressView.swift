import SwiftUI
import Router
import core

struct EditAddresView: View {
    @EnvironmentObject private var navigator: Navigator
    private let store: EditAddressUIStore
    @UIState private var state: EditAddressUIState
    
    init(addressId: String) {
        store = getStore(params: [addressId])
        state = store.currentState
    }
    
    var body: some View {
        ZStack {
            ScrollView {
                Spacer(minLength: 100)
                VStack(spacing: 18) {
                    ForEach(state.fields) { field in
                        InputTextField(field: field) { value in
                            store.updateField(type: field.type, value: value)
                        }
                    }
                    Button("Update") {
                        store.updateAddress()
                    }.tint(.blue)
                    Button("Remove") {
                        store.removeAddress()
                    }.tint(.red)
                }
            }
            .background(Color.porcelain)
            if state.isLoading {
                FullScreenLoader()
            }
        }
        .navigationTitle("Edit Address".uppercased())
        .bind(store, state: $state)
        .onEffect(store) { effect in
            switch effect {
            case let error as EditAddressUIEffect.Error:
                navigator.navigate("/customer/error/\(error.message.toBase64())")
            case is EditAddressUIEffect.Successes:
                navigator.back()
            default:
                break
            }
        }
    }
}
