import SwiftUI
import core

struct CartView: View {
    
    @Store var store: CartStore
    
    var body: some View {
        return NavigationView {
            if let cart = store.currentState.cart, !cart.items.isEmpty {
                VStack {
                    List(cart.items) { item in
                        HStack(spacing: 10) {
                            ProductImage(image: item.product.thumbnail)
                                .frame(width: 50, height: 50)
                            Text(item.product.name)
                            Text("\(item.product.price)")
                        }
                    }
                    .navigationTitle("Cart".uppercased())
                    .background(Color(0xF0F2F5))
                    if let total = cart.totalPrice {
                        Text("\(total)")
                    }
                }
                
            } else {
                VStack {
                    Text("Empty Cart")
                }
            }
        }.tabItem {
            Text("Cart")
        }
    }
}
