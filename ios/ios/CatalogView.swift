import SwiftUI
import core

struct CatalogView: View {
    
    @Store var store: CatalogUIStore

    init() {
        store.loadCatalog()
    }
    
    let columns = Array(repeating: GridItem(.flexible()), count: 2)
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack {
                    LazyVGrid(columns: columns) {
                        ForEach(store.currentState.categories) { category in
                            ForEach(category.products) { product in
                                NavigationLink(destination: ProductDetailScreen(product: product)) {
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
            .background(Color(0xF0F2F5))
        }.tabItem {
            //                Image(systemName: "phone.fill")
            Text("Shop")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        CatalogView()
        //            .previewLayout(PreviewLayout.sizeThatFits)
    }
}

struct ProductItem: View {
    let product: Product, inc, dec: () -> Void
    var body: some View {
        ZStack {
            VStack {
                VStack {
                    ProductImage(image: product.thumbnail)
                }
                .padding()
                .frame(maxWidth: .greatestFiniteMagnitude, maxHeight: .greatestFiniteMagnitude)
                .aspectRatio(1, contentMode: .fill)
                .background(Color(0xF0F0F0))
                .cornerRadius(20)
                Text(product.name)
                    .font(.system(size: 15, weight: .semibold))
                Text("\(product.price)")
                    .font(.system(size: 15, weight: .semibold))
                if product.qty == 0 {
                    ActionButton(text: "+", width: 60, action: inc)
                } else {
                    ActionButtons(qty: product.qty, inc: inc, dec: dec)
                }
            }
            .padding(8)
            .background(.white)
            .cornerRadius(20)
            .opacity(product.isLoading ? 0.8 : 1)
            if product.isLoading {
                VStack {
                    ProgressView()
                        .tint(.black)
                }
            }
        }
    }
}
