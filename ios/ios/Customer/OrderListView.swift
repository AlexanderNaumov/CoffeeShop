import SwiftUI
import core

struct OrderListRoute: SwiftUIRoute {
    var body: some View {
        OrderListView()
    }
    var title: String? {
        "Orders".uppercased()
    }
}

private struct OrderListView: View {
    @Store private var store: OrderListUIStore
    @EnvironmentObject private var router: Router
    
    var body: some View {
        List(store.currentState.orders) { order in
            HStack {
                Button("# \(order.id)") {
                    router.open(OrderDetailRoute(order: order))
                }
                Spacer()
                if let date = order.date {
                    Text(date, style: .relative)
                }
                Image("next")
            }
        }
        .pullToRefresh(isShowing: store.currentState.isRefreshing) {
            store.refreshOrders()
        }
        .listStyle(.insetGrouped)
    }
}
