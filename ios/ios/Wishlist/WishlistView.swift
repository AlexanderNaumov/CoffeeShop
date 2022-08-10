import SwiftUI
import core

struct WishlistView: View {
    @EnvironmentObject private var router: Router
    @Store private var store: WishlistUIStore
    
    var body: some View {
        Group {
            if !store.currentState.wishlist.isEmpty {
                List {
                    ForEach(store.currentState.wishlist) { product in
                        ZStack {
                            Button {
                                router.open(ProductDetailRoute(productId: product.id))
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
                            let wishlist = store.currentState.wishlist
                            guard i < wishlist.count else { return }
                            store.removeProductFromWishlist(product: wishlist[i])
                        }
                    }
                }.pullToRefresh(isShowing: store.currentState.isRefreshing) {
                    store.refreshWishlist()
                }
            } else {
                EmptyView(text: "Empty Wishlist")
            }
        }.navigationTitle("Wishlist".uppercased())
    }
}
