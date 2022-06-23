import SwiftUI
import core

struct CheckoutRoute: SwiftUIRoute {
    var body: some View {
        CheckoutView()
    }
}

struct CheckoutView: View {
    
    @Store var store: CheckoutUIStore
    
    var body: some View {
        let cart = store.currentState.cart!
        let addresses = store.currentState.addresses
        return ZStack {
            List {
                Section(
                    header: HStack {
                        Text("Payment Methods")
                    },
                    content: {
                        ForEach(cart.paymentMethods) { method in
                            HStack {
                                Button {
                                    
                                } label: {
                                    Image(systemName: "square")
                                }
                                Text(method.title)
                            }
                        }
                    }
                )
                Section(
                    header: HStack {
                        Text("Shipping Methods")
                    },
                    content: {
                        ForEach(cart.shippingMethods) { method in
                            HStack {
                                Button {
                                    
                                } label: {
                                    Image(systemName: "square")
                                }
                                Text(method.title)
                            }
                        }
                    }
                )
                Section(
                    header: HStack {
                        Text("Address")
                    },
                    content: {
                        ForEach(addresses) { address in
                            HStack {
                                Button {
                                    
                                } label: {
                                    Image(systemName: "square")
                                }
                                Text("\(address.firstName) \(address.lastName)\n\(address.city), \(address.street), \(address.postcode)")
                            }
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
                    }
                )
            }
            if store.currentState.isLoading {
                VStack {
                    ProgressView()
                        .tint(.black)
                }
            }
        }
    }
}
