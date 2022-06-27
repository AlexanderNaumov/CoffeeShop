import SwiftUI
import core

struct ProductDetailRoute: SwiftUIRoute {
    let product: Product

    var body: some View {
        ProductDetailView(store: Store(wrappedValue: ios.inject(params: [product])))
    }
    
    var title: String? {
        product.name.uppercased()
    }
}

struct ProductDetailView: View {
    
    @Store var store: ProductDetailUIStore
    
    var body: some View {
        let product = store.currentState.product
        return ScrollView {
            VStack {
                ZStack {
                    ProductImage(image: product.thumbnail)
                        .aspectRatio(320 / 240, contentMode: .fill)
                    if product.isLoading {
                        ProductLoader()
                    }
                }
                HStack {
                    Text(product.name)
                    Spacer()
                    if product.qty == 0 {
                        ActionButton(text: "+", width: 60, action: {
                            store.incrementProduct()
                        })
                    } else {
                        ActionButtons(qty: product.qty, inc: {
                            store.incrementProduct()
                        }, dec: {
                            store.decrementProduct()
                        })
                    }
                }.padding(EdgeInsets(top: 0, leading: 15, bottom: 0, trailing: 15))
                VStack {
                    infoBlock(title: "Body", content: "\(product.body)")
                    infoBlock(title: "Roast", content: "\(product.roast)")
                    infoBlock(title: "Acidity", content: "\(product.acidity)")
                    Text(product.description_)
                }.padding(15)
                Spacer()
            }
        }
        .navigationBarItems(
            trailing: store.currentState.isShowWishlist ? AnyView(Button {
                if product.isOnWishlist {
                    store.removeProductFromWishlist(product: product)
                } else {
                    store.addProductToWishlist(product: product)
                }
            } label: {
                Image(product.isOnWishlist ? "favoriteFill" : "favorite")
            }) : AnyView(EmptyView())
        )
    }
    
    private func infoBlock(title: String, content: String) -> some View {
        Group {
            HStack {
                Text(title)
                Spacer()
                Text(content)
            }
            Divider()
        }
    }
}
