import SwiftUI
import core

struct EditAddresRoute: SwiftUIRoute {
    let addressId: String
    var body: some View {
        EditAddresView(store: Store(wrappedValue: ios.inject(params: [addressId])))
    }
    var title: String? {
        "Edit Address".uppercased()
    }
}

private struct EditAddresView: View {
    @Store var store: EditAddressUIStore
    @EnvironmentObject private var router: Router
    
    private func setEffect() {
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
            ScrollView {
                Spacer(minLength: 100)
                VStack(spacing: 18) {
                    ForEach(store.currentState.fields) { field in
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
            if store.currentState.isLoading {
                FullScreenLoader()
            }
        }
        .onAppear {
            setEffect()
        }
    }
}
