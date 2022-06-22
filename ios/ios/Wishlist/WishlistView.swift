import SwiftUI
import core

struct WishlistRoute: SwiftUIRoute {
    var body: some View {
        WishlistView()
    }
}

struct WishlistView: View {
    @EnvironmentObject var router: Router
    @Store var store: WishlistUIStore
    
    var body: some View {
        Group {
            if !store.currentState.wishlist.isEmpty {
                List {
                    ForEach(store.currentState.wishlist) { product in
                        ZStack {
                            Button {
                                router.open(ProductDetailRoute(product: product))
                            } label: {
                                HStack {
                                    ProductImage(image: product.thumbnail)
                                        .frame(width: 50, height: 50)
                                    VStack(alignment: .leading) {
                                        Text(product.name)
                                        Text("\(product.price)")
                                    }
                                    Spacer()
                                    ActionButtons(qty: product.qty, width: 20) {
                                        store.incrementProduct(product: product)
                                    } dec: {
                                        store.decrementProduct(product: product)
                                    }
                                    Text(">")
                                }.buttonStyle(PlainButtonStyle())
                            }
                            if product.isLoading {
                                VStack {
                                    ProgressView()
                                        .tint(.black)
                                }
                            }
                        }
                    }.onDelete { index in
                        Array(index).forEach { i in
                            let wishlist = store.currentState.wishlist
                            guard i < wishlist.count else { return }
                            store.removeProductFromWishlist(product: wishlist[i])
                        }
                    }
                }.pullToRefresh(isShowing: store.currentState.isRefreshing) {
                    store.refreshWishlist()
                }
            } else {
                VStack {
                    Text("Empty Wishlist")
                }
            }
        }.navigationTitle("Wishlist".uppercased())
    }
}
