import SwiftUI
import core

struct CartView: View {
    @EnvironmentObject var router: Router
    @Store var store: CartUIStore
    
    var body: some View {
        Group {
            if let cart = store.currentState.cart, !cart.items.isEmpty {
                VStack(spacing: 0) {
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
                                        Button {
                                            router.open(ProductDetailRoute(product: item.product))
                                        } label: {
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
                                                Text(">")
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
                        }
                        .padding(EdgeInsets(top: 0, leading: 15, bottom: 15, trailing: 15))
                        .background(Color(0xF0F2F5))
                    }
                    if store.currentState.isShowCheckoutButton {
                        Button("Checkout") {
                            router.open(CheckoutRoute())
                        }
                        .foregroundColor(.white)
                        .frame(height: 40)
                        .frame(maxWidth: .infinity)
                        .background(store.currentState.isActiveCheckoutButton ? .green : .black)
                        .cornerRadius(12)
                        .padding(EdgeInsets(top: 0, leading: 15, bottom: 15, trailing: 15))
                        .background(Color(0xF0F2F5))
                    }
                }
                
            } else {
                VStack {
                    Text("Empty Cart")
                }
            }
        }
    }
}
