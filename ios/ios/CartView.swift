import SwiftUI
import core

struct CartView: View {
    
    @Store var store: CartUIStore
    
    var body: some View {
        NavigationView {
            if let cart = store.currentState.cart, !cart.items.isEmpty {
                VStack {
                    List {
                        Section(
                            header: HStack {
                                Button {
                                    store.selectAllItems()
                                } label: {
                                    Image(systemName: store.currentState.isSelectedAllItems ? "checkmark.square.fill" : "square")
                                    Text("Select all")
                                }
                                Spacer()
                                Button("Remove selected") {
                                    store.removeSelectedItems()
                                }
                            },
                            content: {
                                ForEach(cart.items) { item in
                                    ZStack {
                                        NavigationLink(destination: ProductDetailScreen(product: item.product)) {
                                            HStack {
                                                Button {
                                                    store.selectCartItem(item: item)
                                                } label: {
                                                    Image(systemName: store.currentState.itemSelected(item: item) ? "checkmark.square.fill" : "square")
                                                }
                                                
                                                ProductImage(image: item.product.thumbnail)
                                                    .frame(width: 50, height: 50)
                                                VStack(alignment: .leading) {
                                                    Text(item.product.name)
                                                    Text("\(item.product.price)")
                                                }
                                                Spacer()
                                                ActionButtons(qty: item.product.qty, width: 20) {
                                                    store.incrementProduct(product: item.product)
                                                } dec: {
                                                    store.decrementProduct(product: item.product)
                                                }

                                            }.buttonStyle(PlainButtonStyle())
                                        }
                                        if item.product.isLoading {
                                            VStack {
                                                ProgressView()
                                                    .tint(.black)
                                            }
                                        }
                                    }
                                }
                            })
                    }
                    .pullToRefresh(isShowing: store.currentState.isRefreshing) {
                        store.refresh()
                    }
                    .listStyle(.insetGrouped)
                    .navigationTitle("Cart".uppercased())
                    .background(Color(0xF0F2F5))
                    if let total = cart.totalPrice {
                        HStack {
                            Text("Total")
                            Spacer()
                            Text("\(total)")
                        }.padding(EdgeInsets(top: 0, leading: 15, bottom: 10, trailing: 15))
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
