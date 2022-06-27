import SwiftUI
import core

struct OrderDetailRoute: SwiftUIRoute {
    var order: Order
    var body: some View {
        OrderDetailView(store: Store(wrappedValue: ios.inject(params: [order])))
    }
    var title: String? {
        "# \(order.id)"
    }
}

struct OrderDetailView: View {
    @Store var store: OrderDetailUIStore
    @EnvironmentObject var router: Router
    
    var body: some View {
        let order = store.currentState.order
        return ZStack {
            VStack(spacing: 0) {
                List {
                    Section(
                        header: HStack {
                            Text("Payment Method")
                        },
                        content: {
                            Text(order.paymentMethod.title)
                                .buttonStyle(PlainButtonStyle())
                        }
                    )
                    Section(
                        header: HStack {
                            Text("Shipping Method")
                        },
                        content: {
                            Text(order.shippingMethod.title)
                                .buttonStyle(PlainButtonStyle())
                        }
                    )
                    Section(
                        header: HStack {
                            Text("Address")
                        },
                        content: {
                            Text("\(order.address.firstName) \(order.address.lastName)\n\(order.address.city), \(order.address.street), \(order.address.postcode)")
                                .buttonStyle(PlainButtonStyle())
                        }
                    )
                    Section(
                        header: HStack {
                            Text("Items")
                        },
                        content: {
                            ForEach(order.products) { product in
                                HStack {
                                    ProductImage(image: product.thumbnail)
                                        .frame(width: 50, height: 50)
                                    VStack(alignment: .leading) {
                                        Text(product.name)
                                        Text("\(product.price)")
                                    }
                                    Spacer()
                                    Text("\(product.qty)x")
                                }
                            }
                            if let total = order.totalPrice {
                                HStack {
                                    Text("Total")
                                    Spacer()
                                    Text("\(total)")
                                }
                            }
                        }
                    )
                }
                Button("Reorder") {
                    store.reorder()
                }
                .foregroundColor(.white)
                .frame(height: 40)
                .frame(maxWidth: .infinity)
                .background(.green)
                .cornerRadius(12)
                .padding(EdgeInsets(top: 15, leading: 15, bottom: 15, trailing: 15))
                .background(Color(0xF0F2F5))
            }
            if store.currentState.isLoading {
                FullScreenLoader()
            }
        }
    }
}
