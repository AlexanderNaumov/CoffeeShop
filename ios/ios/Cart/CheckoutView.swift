import SwiftUI
import Router
import core

struct CheckoutView: View {
    @EnvironmentObject private var navigator: Navigator
    private let store: CheckoutUIStore
    @UIState private var state: CheckoutUIState
    
    init(store: CheckoutUIStore = getStore()) {
        self.store = store
        state = store.currentState
    }
    
    var body: some View {
        Group {
            if let cart = state.cart {
                let addresses = state.addresses
                ZStack {
                    VStack(spacing: 0) {
                        List {
                            Section(
                                header: Text("Payment Methods"),
                                content: {
                                    ForEach(cart.paymentMethods) { method in
                                        CheckoutCell(title: method.title, checkmarkFilled: state.equalPaymentMethod(method: method)) {
                                            store.selectPayment(method: method)
                                        }
                                    }
                                }
                            )
                            Section(
                                header:  Text("Shipping Methods"),
                                content: {
                                    ForEach(cart.shippingMethods) { method in
                                        CheckoutCell(title: method.title, checkmarkFilled: state.equalShippingMethod(method: method)) {
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
                                            checkmarkFilled: state.equalAddress(address: address)
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
                            color: state.isActiveOrderButton ? .green : .black
                        ) {
                            guard state.isActiveOrderButton else { return }
                            store.createOrder()
                        }
                    }
                    if state.isLoading {
                        FullScreenLoader()
                    }
                }.navigationTitle("Checkout".uppercased())
            } else {
                EmptyView()
            }
        }
        .bind(store, state: $state)
        .onEffect(store) { effect in
            switch effect {
            case let success as CheckoutUIEffect.OrderSuccess:
                navigator.navigate("success/\(success.id)")
            case let error as CheckoutUIEffect.Error:
                navigator.navigate("error/\(error.message.toBase64())")
            default:
                break
            }
        }
    }
}
