import SwiftUI
import core

struct CatalogView: View {
    
    @Store var store: CatalogUIStore

    init() {
        store.loadCatalog()
    }
    
    let columns = Array(repeating: GridItem(.flexible()), count: 2)
    
    var body: some View {
        NavView { router in
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
            .background(Color(0xF0F2F5))
        }
        .ignoresSafeArea()
        .tabItem {
            //                Image(systemName: "phone.fill")
            Text("Shop")
        }
    }
}
