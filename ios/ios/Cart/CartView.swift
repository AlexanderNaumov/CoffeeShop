import SwiftUI
import core

struct CartView: View {
    @EnvironmentObject private var router: Router
    @Store private var store: CartUIStore
    
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
                                    CheckmarkImage(store.currentState.isSelectedAllItems)
                                    Text("Select all")
                                }
                                Spacer()
                                Button("Remove selected") {
                                    store.removeSelectedItems()
                                }.tint(.red)
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
                                                    CheckmarkImage(store.currentState.itemSelected(item: item))
                                                }
                                                
                                                ProductImage(image: item.product.thumbnail)
                                                    .frame(width: 50, height: 50)
                                                VStack(alignment: .leading) {
                                                    Text(item.product.name)
                                                        .font(.appRegular)
                                                    Text("\(item.product.price)")
                                                        .font(.appSemibold)
                                                }
                                                Spacer()
                                                ActionButtons(qty: item.product.qty, width: 20) {
                                                    store.incrementProduct(product: item.product)
                                                } dec: {
                                                    store.decrementProduct(product: item.product)
                                                }
                                                Image("next")
                                            }.buttonStyle(PlainButtonStyle())
                                        }
                                        if item.product.isLoading {
                                            ProductLoader()
                                        }
                                    }
                                }
                            })
                    }
                    .pullToRefresh(isShowing: store.currentState.isRefreshing) {
                        store.refresh()
                    }
                    .navigationTitle("Cart".uppercased())
                    .background(Color.porcelain)
                    if let total = cart.totalPrice {
                        HStack {
                            Text("Total")
                            Spacer()
                            Text("\(total)")
                        }
                        .font(.system(size: 21, weight: .semibold))
                        .padding(EdgeInsets(top: 15, leading: 15, bottom: 15, trailing: 15))
                        .background(Color.porcelain)
                    }
                    if store.currentState.isShowCheckoutButton {
                        WidewButton(
                            title: "Checkout",
                            color: store.currentState.isActiveCheckoutButton ? .green : .black
                        ) {
                            guard store.currentState.isActiveCheckoutButton else { return }
                            router.open(CheckoutRoute())
                        }
                    }
                }
                
            } else {
                EmptyView(text: "Empty Cart")
            }
        }
    }
}
