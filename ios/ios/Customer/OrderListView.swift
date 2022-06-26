import SwiftUI
import core

struct OrderListRoute: SwiftUIRoute {
    var body: some View {
        OrderListView()
    }
}

struct OrderListView: View {
    @Store var store: OrderListUIStore
    @EnvironmentObject var router: Router
    
    var body: some View {
        List(store.currentState.orders) { order in
            HStack {
                Button("# \(order.id)") {
                    router.open(OrderDetailRoute(order: order))
                }
                Spacer()
                Text(">")
            }
        }
        .pullToRefresh(isShowing: store.currentState.isRefreshing) {
            store.refreshOrders()
        }
        .listStyle(.insetGrouped)
        .navigationTitle("Orders".uppercased())
    }
}
