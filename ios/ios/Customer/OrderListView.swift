import SwiftUI
import Router
import core

struct OrderListView: View {
    @EnvironmentObject private var navigator: Navigator
    private let store: OrderListUIStore
    @UIState private var state: OrderListUIState
    
    init(store: OrderListUIStore = getStore()) {
        self.store = store
        state = store.currentState
    }
    
    var body: some View {
        let orders = state.orders.sorted {
            guard let date1 = $0.date, let date2 = $1.date else { return false }
            return date1 > date2
        }
        return List(orders) { order in
            HStack {
                Button {
                    navigator.navigate("\(order.id)")
                } label: {
                    HStack {
                        Text("#")
                            .font(.appSemibold)
                        Text(order.id)
                            .font(.appRegular)
                        
                    }
                }
                Spacer()
                if let date = order.date {
                    Text(date, style: .relative)
                        .font(.appRegular)
                }
                Image("next")
            }
        }
        .pullToRefresh(isShowing: state.isRefreshing) {
            store.refreshOrders()
        }
        .listStyle(.insetGrouped)
        .navigationTitle("Orders".uppercased())
        .bind(store, state: $state)
    }
}
