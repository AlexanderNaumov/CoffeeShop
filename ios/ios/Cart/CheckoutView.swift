import SwiftUI
import core

struct CheckoutRoute: SwiftUIRoute {
    var body: some View {
        CheckoutView()
    }
}

struct CheckoutView: View {
    @EnvironmentObject var router: Router
    @Store var store: CheckoutUIStore
    
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
                                header: HStack {
                                    Text("Payment Methods")
                                },
                                content: {
                                    ForEach(cart.paymentMethods) { method in
                                        Button {
                                            store.selectPayment(method: method)
                                        } label: {
                                            HStack {
                                                Image(systemName: store.currentState.paymentMethodSelected(method: method) ? "checkmark.square.fill" : "square")
                                                Text(method.title)
                                            }
                                        }.buttonStyle(PlainButtonStyle())
                                    }
                                }
                            )
                            Section(
                                header: HStack {
                                    Text("Shipping Methods")
                                },
                                content: {
                                    ForEach(cart.shippingMethods) { method in
                                        Button {
                                            store.selectShipping(method: method)
                                        } label: {
                                            HStack {
                                                Image(systemName: store.currentState.shippingMethodId(method: method) ? "checkmark.square.fill" : "square")
                                                Text(method.title)
                                            }
                                        }.buttonStyle(PlainButtonStyle())
                                    }
                                }
                            )
                            Section(
                                header: HStack {
                                    Text("Address")
                                },
                                content: {
                                    ForEach(addresses) { address in
                                        Button {
                                            store.setAddress(address: address)
                                        } label: {
                                            HStack {
                                                Image(systemName: store.currentState.addressSelected(address: address) ? "checkmark.square.fill" : "square")
                                                Text("\(address.firstName) \(address.lastName)\n\(address.city), \(address.street), \(address.postcode)")
                                            }
                                        }.buttonStyle(PlainButtonStyle())
                                    }
                                }
                            )
                            Section(
                                header: HStack {
                                    Text("Items")
                                },
                                content: {
                                    ForEach(cart.items) { item in
                                        HStack {
                                            ProductImage(image: item.product.thumbnail)
                                                .frame(width: 50, height: 50)
                                            VStack(alignment: .leading) {
                                                Text(item.product.name)
                                                Text("\(item.product.price)")
                                            }
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
                        Button("Create Oreder") {
                            guard store.currentState.isActiveOrderButton else { return }
                            store.createOrder()
                        }
                        .foregroundColor(.white)
                        .frame(height: 40)
                        .frame(maxWidth: .infinity)
                        .background(store.currentState.isActiveOrderButton ? .green : .black)
                        .cornerRadius(12)
                        .padding(EdgeInsets(top: 15, leading: 15, bottom: 15, trailing: 15))
                        .background(Color(0xF0F2F5))
                    }
                    .navigationTitle("Checkout".uppercased())
                    if store.currentState.isLoading {
                        VStack {
                            ProgressView()
                                .tint(.black)
                        }
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
