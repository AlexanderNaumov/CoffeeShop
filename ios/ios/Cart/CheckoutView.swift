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
                    message: "Order ID: \(success.id)",
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
                                        CheckoutCell(title: method.title, checkmarkFilled: store.currentState.equalPaymentMethod(method: method)) {
                                            store.selectPayment(method: method)
                                        }
                                    }
                                }
                            )
                            Section(
                                header:  Text("Shipping Methods"),
                                content: {
                                    ForEach(cart.shippingMethods) { method in
                                        CheckoutCell(title: method.title, checkmarkFilled: store.currentState.equalShippingMethod(method: method)) {
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
                                            checkmarkFilled: store.currentState.equalAddress(address: address)
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
                                                    .font(.appRegular)
                                                Text("\(item.product.price)")
                                                    .font(.appSemibold)
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
                        LargeButton(
                            title: "Create Order",
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

private func CheckoutCell(title: String, checkmarkFilled: Bool, action: @escaping () -> Void) -> some View {
    Button(action: action) {
        HStack {
            CheckmarkImage(checkmarkFilled)
            Text(title)
                .font(.appRegular)
        }
    }.buttonStyle(PlainButtonStyle())
}
