import SwiftUI
import Router
import core

struct CatalogView: View {
    @EnvironmentObject private var navigator: Navigator
    private let store: CatalogUIStore
    @UIState private var state: CatalogUIState
    private let columns = Array(repeating: GridItem(.flexible()), count: 2)
    
    init(store: CatalogUIStore = getStore()) {
        self.store = store
        state = store.currentState
    }
    
    var body: some View {
        ScrollView {
            VStack {
                LazyVGrid(columns: columns) {
                    ForEach(state.categories) { category in
                        ForEach(category.products) { product in
                            Button {
                                navigator.navigate("\(product.id)")
                            } label: {
                                CatalogProductItem(product: product) {
                                    store.incrementProduct(product: product)
                                } dec: {
                                    store.decrementProduct(product: product)
                                }
                            }
                        }.padding(10)
                    }
                }
            }.padding(10)
        }
        .pullToRefresh(isShowing: state.isRefreshing) {
            store.refreshCatalog()
        }
        .navigationTitle("Coffe".uppercased())
        .background(Color.porcelain)
        .bind(store, state: $state)
    }
}
