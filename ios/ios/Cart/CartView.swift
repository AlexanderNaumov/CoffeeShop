import SwiftUI
import Router
import core

struct CartView: View {
    @EnvironmentObject private var navigator: Navigator
    private let store: CartUIStore
    @UIState private var state: CartUIState
    
    init(store: CartUIStore = getStore()) {
        self.store = store
        state = store.currentState
    }
    
    var body: some View {
        Group {
            if let cart = state.cart, !cart.items.isEmpty {
                VStack(spacing: 0) {
                    List {
                        Section(
                            header: HStack {
                                Button {
                                    store.selectAllItems()
                                } label: {
                                    CheckmarkImage(state.isSelectedAllItems)
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
                                            navigator.navigate("products/\(item.product.id)")
                                        } label: {
                                            HStack {
                                                Button {
                                                    store.selectCartItem(item: item)
                                                } label: {
                                                    CheckmarkImage(state.itemSelected(item: item))
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
                    .pullToRefresh(isShowing: state.isRefreshing) {
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
                    if state.isShowCheckoutButton {
                        LargeButton(
                            title: "Checkout",
                            color: state.isActiveCheckoutButton ? .green : .black
                        ) {
                            guard state.isActiveCheckoutButton else { return }
                            navigator.navigate("checkout")
                        }
                    }
                }
            } else {
                EmptyView(text: "Empty Cart")
            }
        }
        .bind(store, state: $state)
    }
}
