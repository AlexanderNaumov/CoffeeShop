import SwiftUI
import core

struct ProductDetailRoute: SwiftUIRoute {
    let productId: String

    var body: some View {
        ProductDetailView(store: Store(wrappedValue: ios.inject(params: [productId])))
    }
}

private struct ProductDetailView: View {
    
    @Store var store: ProductDetailUIStore
    
    var body: some View {
        guard let product = store.currentState.product else { return AnyView(EmptyView()) }
        return AnyView(
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
                        InfoBlock(title: "Body", content: "\(product.body)")
                        InfoBlock(title: "Roast", content: "\(product.roast)")
                        InfoBlock(title: "Acidity", content: "\(product.acidity)")
                        Text(product.description_)
                            .font(.appRegular)
                    }
                    .padding(15)
                    .background(.white)
                    Spacer()
                }
            }
            .background(Color.porcelain)
            .navigationBarItems(
                trailing: store.currentState.isShowWishlist ? AnyView(Button {
                    if product.isOnWishlist {
                        store.removeProductFromWishlist()
                    } else {
                        store.addProductToWishlist()
                    }
                } label: {
                    Image(product.isOnWishlist ? "favoriteFill" : "favorite")
                }) : AnyView(EmptyView())
            )
        )
    }
}


private func InfoBlock(title: String, content: String) -> some View {
    Group {
        HStack {
            Text(title)
                .font(.appRegular)
            Spacer()
            Text(content)
                .font(.appSemibold)
        }
        Divider()
    }
}
