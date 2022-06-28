import SwiftUI
import core

struct CatalogView: View {
    @EnvironmentObject private var router: Router
    @Store  var store: CatalogUIStore
    
    private let columns = Array(repeating: GridItem(.flexible()), count: 2)
    
    init() {
        store.loadCatalog()
    }
    
    var body: some View {
        ScrollView {
            VStack {
                LazyVGrid(columns: columns) {
                    ForEach(store.currentState.categories) { category in
                        ForEach(category.products) { product in
                            Button {
                                router.open(ProductDetailRoute(product: product))
                            } label: {
                                ProductItem(product: product) {
                                    store.incrementProduct(product: product)
                                } dec: {
                                    store.decrementProduct(product: product)
                                }
                            }
                        }.padding(10)
                    }
                }
            }.padding(10)
        }.pullToRefresh(isShowing: store.currentState.isRefreshing) {
            store.refreshCatalog()
        }
        .navigationTitle("Coffe".uppercased())
        .background(Color.porcelain)
    }
}

private func ProductItem(product: Product, inc: @escaping () -> Void, dec:  @escaping () -> Void) -> some View {
    ZStack {
        VStack {
            VStack {
                ProductImage(image: product.thumbnail)
            }
            .padding()
            .frame(maxWidth: .greatestFiniteMagnitude, maxHeight: .greatestFiniteMagnitude)
            .aspectRatio(1, contentMode: .fill)
            .background(Color.gallery)
            .cornerRadius(20)
            Text(product.name)
                .font(.appRegular)
            Text("\(product.price)")
                .font(.appSemibold)
            if product.qty == 0 {
                ActionButton(image: "plus", width: 60, action: inc)
            } else {
                ActionButtons(qty: product.qty, inc: inc, dec: dec)
            }
        }
        .padding(6)
        .background(.white)
        .cornerRadius(20)
        if product.isLoading {
            ProductLoader()
        }
    }
}
