import SwiftUI
import core

struct CheckoutRoute: SwiftUIRoute {
    var body: some View {
        CheckoutView()
    }
    var title: String? {
        "Checkout".uppercased()
    }
}

private struct CheckoutView: View {
    @EnvironmentObject private var router: Router
    @Store private var store: CheckoutUIStore
    
    private func setEffect() {
        store.onEffect { [weak router] effect in
            switch effect {
            case let success as CheckoutUIEffect.OrderSuccess:
                router?.open(AlertRoute(alert: Alert(
                    title: "Success",
                    message: "Oredr ID: \(success.id)",
                    dismissButton: .cancel("Ok", action: {
                        router?.close()
                    })
                )))
            case let error as CheckoutUIEffect.Error:
                router?.open(AlertRoute(alert: Alert(title: "Error", message: error.message)))
            default:
                break
            }
        }
    }
    
    var body: some View {
        Group {
            if let cart = store.currentState.cart {
                let addresses = store.currentState.addresses
                ZStack {
                    VStack(spacing: 0) {
                        List {
                            Section(
                                header: Text("Payment Methods"),
                                content: {
                                    ForEach(cart.paymentMethods) { method in
                                        CheckoutCell(title: method.title, chckmarkFilled: store.currentState.paymentMethodSelected(method: method)) {
                                            store.selectPayment(method: method)
                                        }
                                    }
                                }
                            )
                            Section(
                                header:  Text("Shipping Methods"),
                                content: {
                                    ForEach(cart.shippingMethods) { method in
                                        CheckoutCell(title: method.title, chckmarkFilled: store.currentState.shippingMethodId(method: method)) {
                                            store.selectShipping(method: method)
                                        }
                                    }
                                }
                            )
                            Section(
                                header: Text("Address"),
                                content: {
                                    ForEach(addresses) { address in
                                        CheckoutCell(
                                            title: "\(address.firstName) \(address.lastName)\n\(address.city), \(address.street), \(address.postcode)",
                                            chckmarkFilled: store.currentState.addressSelected(address: address)
                                        ) {
                                            store.setAddress(address: address)
                                        }
                                    }
                                }
                            )
                            Section(
                                header: Text("Items"),
                                content: {
                                    ForEach(cart.items) { item in
                                        HStack {
                                            ProductImage(image: item.product.thumbnail)
                                                .frame(width: 50, height: 50)
                                            VStack(alignment: .leading) {
                                                Text(item.product.name)
                                                Text("\(item.product.price)")
                                            }
                                            Spacer()
                                            Text("\(item.product.qty)x")
                                        }
                                    }
                                    if let total = cart.totalPrice {
                                        HStack {
                                            Text("Total")
                                            Spacer()
                                            Text("\(total)")
                                        }
                                    }
                                }
                            )
                        }
                        WidewButton(
                            title: "Create Oreder",
                            color: store.currentState.isActiveOrderButton ? .green : .black
                        ) {
                            guard store.currentState.isActiveOrderButton else { return }
                            store.createOrder()
                        }
                    }
                    if store.currentState.isLoading {
                        FullScreenLoader()
                    }
                }
            } else {
                EmptyView()
            }
        }.onAppear {
            setEffect()
        }
    }
}

private func CheckoutCell(title: String, chckmarkFilled: Bool, action: @escaping () -> Void) -> some View {
    Button(action: action) {
        HStack {
            CheckmarkImage(chckmarkFilled)
            Text(title)
        }
    }.buttonStyle(PlainButtonStyle())
}
