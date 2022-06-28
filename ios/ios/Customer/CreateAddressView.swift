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

private struct CreateAddressView: View {
    @Store private var store: CreateAddressUIStore
    @EnvironmentObject private var router: Router
    
    private func setEffect() {
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
            ScrollView {
                Spacer(minLength: 100)
                VStack(spacing: 18) {
                    ForEach(store.currentState.fields) { field in
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
            if store.currentState.isLoading {
                FullScreenLoader()
            }
        }.onAppear {
            setEffect()
        }
    }
}
