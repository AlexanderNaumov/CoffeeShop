import SwiftUI
import Router
import core

struct WishlistView: View {
    @EnvironmentObject private var navigator: Navigator
    private let store: WishlistUIStore
    @UIState private var state: WishlistUIState
    
    init(store: WishlistUIStore = getStore()) {
        self.store = store
        state = store.currentState
    }
    
    var body: some View {
        Group {
            if !state.wishlist.isEmpty {
                List {
                    ForEach(state.wishlist) { product in
                        ZStack {
                            Button {
                                navigator.navigate("products/\(product.id)")
                            } label: {
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
                                    ActionButtons(qty: product.qty, width: 20) {
                                        store.incrementProduct(product: product)
                                    } dec: {
                                        store.decrementProduct(product: product)
                                    }
                                    Image("next")
                                }.buttonStyle(PlainButtonStyle())
                            }
                            if product.isLoading {
                                ProductLoader()
                            }
                        }
                    }.onDelete { index in
                        Array(index).forEach { i in
                            let wishlist = state.wishlist
                            guard i < wishlist.count else { return }
                            store.removeProductFromWishlist(product: wishlist[i])
                        }
                    }
                }
                .pullToRefresh(isShowing: state.isRefreshing) {
                    store.refreshWishlist()
                }
            } else {
                EmptyView(text: "Empty Wishlist")
            }
        }
        .navigationTitle("Wishlist".uppercased())
        .bind(store, state: $state)
    }
}
