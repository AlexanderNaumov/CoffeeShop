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

private struct OrderDetailView: View {
    @Store var store: OrderDetailUIStore
    @EnvironmentObject private var router: Router
    
    var body: some View {
        let order = store.currentState.order
        return ZStack {
            VStack(spacing: 0) {
                List {
                    OrderDetailSection(title: "Payment Method", content: order.paymentMethod.title)
                    OrderDetailSection(title: "Shipping Method", content: order.shippingMethod.title)
                    OrderDetailSection(
                        title: "Address",
                        content: "\(order.address.firstName) \(order.address.lastName)\n\(order.address.city), \(order.address.street), \(order.address.postcode)"
                    )
                    Section(
                        header: Text("Items"),
                        content: {
                            ForEach(order.products) { product in
                                HStack {
                                    ProductImage(image: product.thumbnail)
                                        .frame(width: 50, height: 50)
                                    VStack(alignment: .leading) {
                                        Text(product.name)
                                            .font(.appRegular)
                                        Text("\(product.price)")
                                            .font(.appSemibold)
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
                WidewButton(
                    title: "Reorder",
                    color: .green
                ) {
                    store.reorder()
                }
            }
            if store.currentState.isLoading {
                FullScreenLoader()
            }
        }
    }
}

private func OrderDetailSection(title: String, content: String) -> some View {
    Section(
        header: Text(title),
        content: {
            Text(content)
                .font(.appRegular)
        }
    )
}
