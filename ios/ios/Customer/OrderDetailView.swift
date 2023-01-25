import SwiftUI
import Router
import core

struct OrderDetailView: View {
    private let store: OrderDetailUIStore
    @UIState private var state: OrderDetailUIState
    
    init(orderId: String) {
        store = getStore(params: [orderId])
        state = store.currentState
    }
    
    var body: some View {
        Group {
            if let order = state.order {
                ZStack {
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
                        LargeButton(
                            title: "Reorder",
                            color: .green
                        ) {
                            store.reorder()
                        }
                    }
                    if state.isLoading {
                        FullScreenLoader()
                    }
                }
            }
        }.bind(store, state: $state)
    }
}
