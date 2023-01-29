import SwiftUI
import Router
import core

struct CreateAddressView: View {
    @EnvironmentObject private var navigator: Navigator
    private let store: CreateAddressUIStore
    @UIState private var state: CreateAddressUIState
    
    init(store: CreateAddressUIStore = getStore()) {
        self.store = store
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
                    Button("Create") {
                        store.createAddress()
                    }.tint(.blue)
                }
            }
            .background(Color.porcelain)
            if state.isLoading {
                FullScreenLoader()
            }
        }
        .navigationTitle("New Address".uppercased())
        .bind(store, state: $state)
        .onEffect(store) { effect in
            switch effect {
            case let error as CreateAddressUIEffect.Error:
                navigator.navigate("/customer/error/\(error.message.toBase64())")
            case is CreateAddressUIEffect.Successes:
                navigator.back()
            default:
                break
            }
        }
    }
}
