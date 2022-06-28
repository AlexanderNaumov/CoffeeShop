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
        let orders = store.currentState.orders.sorted {
            guard let date1 = $0.date, let date2 = $1.date else { return false }
            return date1 > date2
        }
        return List(orders) { order in
            HStack {
                Button {
                    router.open(OrderDetailRoute(order: order))
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
        .pullToRefresh(isShowing: store.currentState.isRefreshing) {
            store.refreshOrders()
        }
        .listStyle(.insetGrouped)
    }
}
