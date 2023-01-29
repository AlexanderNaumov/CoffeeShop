import SwiftUI
import core

struct ProductDetailView: View {
    private let store: ProductDetailUIStore
    @UIState var state: ProductDetailUIState
    
    init(productId: String) {
        store = getStore(params: [productId])
        state = store.currentState
    }
    
    var body: some View {
        return Group {
            if let product = state.product {
                ScrollView {
                    VStack(spacing: 0) {
                        ZStack {
                            ProductImage(image: product.thumbnail)
                                .aspectRatio(320 / 240, contentMode: .fill)
                            if product.isLoading {
                                ProductLoader()
                            }
                        }
                        HStack {
                            VStack(alignment: .leading) {
                                Text(product.name)
                                    .font(.appRegular)
                                Text("\(product.price)")
                                    .font(.appSemibold)
                            }
                            Spacer()
                            if product.qty == 0 {
                                ActionButton(image: "plus", width: 60, action: {
                                    store.incrementProduct()
                                })
                            } else {
                                ActionButtons(qty: product.qty, inc: {
                                    store.incrementProduct()
                                }, dec: {
                                    store.decrementProduct()
                                })
                            }
                        }
                        .frame(height: 50)
                        .padding(EdgeInsets(top: 0, leading: 15, bottom: 0, trailing: 15))
                        .background(.white)
                        Divider()
                        VStack {
                            ProductDetailInfoBlock(title: "Body", content: "\(product.body)")
                            ProductDetailInfoBlock(title: "Roast", content: "\(product.roast)")
                            ProductDetailInfoBlock(title: "Acidity", content: "\(product.acidity)")
                            Text(product.description_)
                                .font(.appRegular)
                        }
                        .padding(15)
                        .background(.white)
                        Spacer()
                    }
                }
                .background(Color.porcelain)
                .navigationTitle(product.name)
                .navigationBarItems(
                    trailing: state.isShowWishlist
                    ? AnyView(Button {
                        if product.isOnWishlist {
                            store.removeProductFromWishlist()
                        } else {
                            store.addProductToWishlist()
                        }
                    } label: {
                        Image(product.isOnWishlist ? "favoriteFill" : "favorite")
                    })
                    : AnyView(EmptyView())
                )
            }
        }.bind(store, state: $state)
    }
}
